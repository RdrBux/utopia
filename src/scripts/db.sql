/* USERS TABLE */
CREATE TYPE privacy AS ENUM ('all', 'friends', 'me');

CREATE TABLE IF NOT EXISTS auth_user (
	id TEXT PRIMARY KEY,
	email TEXT UNIQUE,
	firstname TEXT NOT NULL,
	lastname TEXT NOT NULL,
	img_url TEXT,
	bio TEXT,
	privacy_statistics privacy NOT NULL DEFAULT 'all',
	privacy_friends privacy NOT NULL DEFAULT 'all',
	created_at TIMESTAMPTZ DEFAULT NOW()
);

/* POSTS TABLE */
CREATE TYPE post_types AS ENUM ('general', 'food', 'workout');

CREATE TABLE IF NOT EXISTS posts (
	id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
	user_id TEXT REFERENCES auth_user(id) ON DELETE CASCADE,
	title VARCHAR(255) NOT NULL,
	content TEXT,
	img_url TEXT,
	post_type post_types NOT NULL,
	post_data TEXT,
	post_privacy privacy NOT NULL,
	created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS posts_user_id_idx ON posts(user_id);
CREATE INDEX IF NOT EXISTS posts_type_idx ON posts(post_type);
CREATE INDEX IF NOT EXISTS posts_title_idx ON posts(title);
CREATE INDEX IF NOT EXISTS posts_content_idx ON posts(content);
CREATE INDEX IF NOT EXISTS posts_privacy_idx ON posts(post_privacy);

/* POSTS REST TABLE */
CREATE TABLE IF NOT EXISTS posts_rest (
	id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
	user_id TEXT REFERENCES auth_user(id) ON DELETE CASCADE,
	start_time TIMESTAMPTZ NOT NULL,
	end_time TIMESTAMPTZ NOT NULL,
	created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS posts_rest_user_id_idx ON posts_rest(user_id);

/* POSTS LIKES */
CREATE TABLE IF NOT EXISTS post_likes (
	id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
	post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
	user_id TEXT REFERENCES auth_user(id) ON DELETE CASCADE,
	created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS post_likes_post_id_idx ON post_likes(post_id);
CREATE INDEX IF NOT EXISTS post_likes_user_id_idx ON post_likes(user_id);

/* POSTS COMMENTS */
CREATE TABLE IF NOT EXISTS post_comments (
	id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
	post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
	user_id TEXT REFERENCES auth_user(id) ON DELETE CASCADE,
	content TEXT NOT NULL,
	created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS post_comments_post_id_idx ON post_comments(post_id);

/* FRIENDS */
CREATE TYPE friends_status AS ENUM ('pending', 'accepted', 'rejected');

CREATE TABLE IF NOT EXISTS friends (
	id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
	source_id TEXT REFERENCES auth_user(id) ON DELETE CASCADE,
	target_id TEXT REFERENCES auth_user(id) ON DELETE CASCADE,
	status friends_status NOT NULL,
	created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS friends_source_id_idx ON friends(source_id);
CREATE INDEX IF NOT EXISTS friends_target_id_idx ON friends(target_id);
CREATE INDEX IF NOT EXISTS friends_status_idx ON friends(status);

/* NOTIFICATIONS */
CREATE TYPE notification_types AS ENUM ('friend_request', 'friend_accepted', 'post_like', 'post_comment', 'friend_new_content');

CREATE TABLE IF NOT EXISTS notifications (
	id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
	user_id TEXT REFERENCES auth_user(id) ON DELETE CASCADE,
	sender_id TEXT REFERENCES auth_user(id) ON DELETE CASCADE,
	post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
	notification_type notification_types NOT NULL,
	is_read BOOLEAN NOT NULL,
	created_at TIMESTAMPTZ DEFAULT NOW()
)

CREATE INDEX IF NOT EXISTS notifications_user_id_idx ON notifications(user_id);
CREATE INDEX IF NOT EXISTS notifications_is_read_idx ON notifications(is_read);

/* TRIGGERS */
-- Trigger function for Friend Request Received
CREATE OR REPLACE FUNCTION notify_friend_request_received()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO notifications (user_id, sender_id, notification_type, is_read)
    VALUES (NEW.target_id, NEW.source_id, 'friend_request', FALSE);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for Friend Request Received
CREATE TRIGGER friend_request_received_trigger
AFTER INSERT ON friends
FOR EACH ROW
WHEN (NEW.status = 'pending' AND NEW.source_id != NEW.target_id)
EXECUTE FUNCTION notify_friend_request_received();

-- Trigger function for Friend Request Accepted
CREATE OR REPLACE FUNCTION notify_friend_request_accepted()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO notifications (user_id, sender_id, notification_type, is_read)
    VALUES (NEW.source_id, NEW.target_id, 'friend_accepted', FALSE);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for Friend Request Accepted
CREATE TRIGGER friend_request_accepted_trigger
AFTER UPDATE ON friends
FOR EACH ROW
WHEN (NEW.status = 'accepted' AND OLD.status = 'pending')
EXECUTE FUNCTION notify_friend_request_accepted();

-- Trigger function for Post Like
CREATE OR REPLACE FUNCTION notify_post_like()
RETURNS TRIGGER AS $$
BEGIN
    -- Check if the post creator is not the same as the user liking the post
    IF NEW.user_id != (SELECT user_id FROM posts WHERE id = NEW.post_id) THEN
        INSERT INTO notifications (user_id, sender_id, post_id, notification_type, is_read)
        VALUES ((SELECT user_id FROM posts WHERE id = NEW.post_id), NEW.user_id, NEW.post_id, 'post_like', FALSE);
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for Post Like
CREATE TRIGGER post_like_trigger
AFTER INSERT ON post_likes
FOR EACH ROW
EXECUTE FUNCTION notify_post_like();

-- Trigger function for Post Comment
CREATE OR REPLACE FUNCTION notify_post_comment()
RETURNS TRIGGER AS $$
BEGIN
    -- Check if the post creator is not the same as the user commenting on the post
    IF NEW.user_id != (SELECT user_id FROM posts WHERE id = NEW.post_id) THEN
        INSERT INTO notifications (user_id, sender_id, post_id, notification_type, is_read)
        VALUES ((SELECT user_id FROM posts WHERE id = NEW.post_id), NEW.user_id, NEW.post_id, 'post_comment', FALSE);
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for Post Comment
CREATE TRIGGER post_comment_trigger
AFTER INSERT ON post_comments
FOR EACH ROW
EXECUTE FUNCTION notify_post_comment();

-- Trigger function for Friend New Content
CREATE OR REPLACE FUNCTION notify_friend_new_content()
RETURNS TRIGGER AS $$
BEGIN
    -- Check if the post privacy is 'all' or 'friends'
    IF NEW.post_privacy IN ('all', 'friends') THEN
        -- Add notifications for all friends of the post creator
        INSERT INTO notifications (user_id, sender_id, post_id, notification_type, is_read)
        SELECT
            friend_id,
            NEW.user_id,
            NEW.id,  -- Post ID
            'friend_new_content',
            FALSE
        FROM (
            SELECT
                CASE
                    WHEN f.source_id = NEW.user_id THEN f.target_id
                    WHEN f.target_id = NEW.user_id THEN f.source_id
                END AS friend_id
            FROM friends f
            WHERE (f.source_id = NEW.user_id OR f.target_id = NEW.user_id) AND f.status = 'accepted'
        ) AS friend_ids;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for Friend New Content
CREATE TRIGGER friend_new_content_trigger
AFTER INSERT ON posts
FOR EACH ROW
EXECUTE FUNCTION notify_friend_new_content();