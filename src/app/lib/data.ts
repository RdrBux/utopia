'use server';

import { createClient, sql } from '@vercel/postgres';
import { unstable_noStore as noStore, revalidatePath } from 'next/cache';
import {
  CommentPost,
  Friend,
  NotificationWithUser,
  Post,
  PostWithUser,
  UserData,
  UserFriend,
} from './definitions';
import { getUser } from './utils';
import { PeriodType } from '../ui/main/profile/dropdown-statistics';

/* export async function getUserData() {
  noStore();


  const client = createClient();
  await client.connect();

  const user = await getUser();
  if (!user) return;

  try {
    const data = await client.sql<UserData>`
    SELECT * FROM auth_user
    WHERE id = ${user.id};
    `;
    return data.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch user data.');
  } finally {
    await client.end();
  }
} */

export async function getUserById(id: string) {
  noStore();

  const client = createClient();
  await client.connect();

  try {
    const data = await client.sql<UserData>`
    SELECT * FROM auth_user
    WHERE id = ${id};
    `;
    return data.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch user data.');
  } finally {
    await client.end();
  }
}

export async function getUsersByQuery(query: string, ignoreId: string) {
  noStore();

  const client = createClient();
  await client.connect();

  try {
    const data = await client.sql<UserData>`
    SELECT * FROM auth_user
    WHERE id != ${ignoreId} AND (firstname ILIKE ${`%${query}%`} OR lastname ILIKE ${`%${query}%`})
    ORDER BY firstname
    `;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch user data.');
  } finally {
    await client.end();
  }
}

export async function getPosts() {
  noStore();

  const user = await getUser();
  if (!user) return;

  const client = createClient();
  await client.connect();

  try {
    const data = await client.sql<PostWithUser>`
      SELECT us.id user_id, us.firstname, us.lastname, us.img_url user_img_url, po.id, po.title, po.content, po.img_url, po.post_type, po.post_data, po.created_at
      FROM auth_user us JOIN posts po ON us.id = po.user_id
      WHERE po.post_privacy = 'all'
      OR (po.post_privacy = 'friends' AND po.user_id IN (SELECT target_id FROM friends WHERE source_id = ${user.id} AND status = 'accepted' UNION SELECT source_id FROM friends WHERE target_id = ${user.id} AND status = 'accepted'))
      ORDER BY created_at DESC
      `;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch post data.');
  } finally {
    await client.end();
  }
}

export async function getFriendsPosts() {
  noStore();

  const user = await getUser();
  if (!user) return;

  const client = createClient();
  await client.connect();

  try {
    const data = await client.sql<PostWithUser>`
      SELECT us.id user_id, us.firstname, us.lastname, us.img_url user_img_url, po.id, po.title, po.content, po.img_url, po.post_type, po.post_data, po.created_at
      FROM auth_user us JOIN posts po ON us.id = po.user_id
      WHERE (po.user_id IN (SELECT target_id FROM friends WHERE source_id = ${user.id} AND status = 'accepted' UNION SELECT source_id FROM friends WHERE target_id = ${user.id} AND status = 'accepted'))
      AND (po.post_privacy = 'friends' OR po.post_privacy = 'all')
      ORDER BY created_at DESC
      `;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch post data.');
  } finally {
    await client.end();
  }
}

export async function getPostById(id: string) {
  noStore();

  const client = createClient();
  await client.connect();

  try {
    const data = await client.sql<PostWithUser>`
      SELECT us.id user_id, us.firstname, us.lastname, us.img_url user_img_url, po.id, po.title, po.content, po.img_url, po.post_type, po.post_data, po.post_privacy, po.created_at
      FROM auth_user us JOIN posts po ON us.id = po.user_id
      WHERE po.id = ${id};
    `;
    return data.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch post data.');
  } finally {
    await client.end();
  }
}

export async function getPostsByQuery(query: string) {
  noStore();

  const user = await getUser();
  if (!user) return;

  const client = createClient();
  await client.connect();

  try {
    const data = await client.sql<PostWithUser>`
      SELECT us.id user_id, us.firstname, us.lastname, us.img_url user_img_url, po.id, po.title, po.content, po.img_url, po.post_type, po.post_data, po.created_at
      FROM auth_user us JOIN posts po ON us.id = po.user_id
      WHERE (po.title ILIKE ${`%${query}%`} OR po.content ILIKE ${`%${query}%`})
      AND (po.post_privacy = 'all' OR (po.post_privacy = 'friends' AND po.user_id IN (SELECT target_id FROM friends WHERE source_id = ${
        user.id
      } AND status = 'accepted' UNION SELECT source_id FROM friends WHERE target_id = ${
      user.id
    } AND status = 'accepted')))
      ORDER BY created_at DESC
      `;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch post data.');
  } finally {
    await client.end();
  }
}

export async function getUserPosts(id: string) {
  noStore();

  const user = await getUser();
  if (!user) return;

  const client = createClient();
  await client.connect();

  try {
    const data = await client.sql<PostWithUser>`
      SELECT us.id user_id, us.firstname, us.lastname, us.img_url user_img_url, po.id, po.title, po.content, po.img_url, po.post_type, po.post_data, po.created_at
      FROM auth_user us JOIN posts po ON us.id = po.user_id
      WHERE us.id = ${id}
      AND (po.post_privacy = 'all'
      OR (po.post_privacy = 'friends' AND po.user_id IN (SELECT target_id FROM friends WHERE source_id = ${user.id} AND status = 'accepted' UNION SELECT source_id FROM friends WHERE target_id = ${user.id} AND status = 'accepted'))
      OR (po.post_privacy = 'me' AND po.user_id = ${user.id}))
      ORDER BY created_at DESC
      `;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch post data.');
  } finally {
    await client.end();
  }
}

export async function getPostComments(id: string) {
  noStore();

  try {
    const data = await sql<CommentPost>`
      SELECT us.id user_id, us.firstname, us.lastname, us.img_url, pc.id, pc.content, pc.created_at
      FROM post_comments pc JOIN auth_user us ON pc.user_id = us.id
      WHERE post_id = ${id}
      ORDER BY created_at
      `;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch post comments data.');
  }
}

export async function getPostLikes(id: string) {
  noStore();

  try {
    const data = await sql<UserFriend>`
      SELECT us.id, us.firstname, us.lastname, us.img_url, us.bio
      FROM post_likes pl JOIN auth_user us ON pl.user_id = us.id
      WHERE post_id = ${id}
      `;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch post likes data.');
  }
}

export async function postIsLiked(id: string) {
  noStore();

  const user = await getUser();
  if (!user) return;

  try {
    const data = await sql<{ count: number }>`
      SELECT COUNT(*) count FROM post_likes WHERE post_id = ${id} AND user_id = ${user.id};
    `;
    return data.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch post_likes data.');
  }
}

export async function getPostLikesCount(id: string) {
  noStore();

  try {
    const data = await sql`
      SELECT COUNT(*) count FROM post_likes WHERE post_id = ${id};
    `;
    return data.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch post_likes data.');
  }
}

export async function getPostCommentsCount(id: string) {
  noStore();

  try {
    const data = await sql`
      SELECT COUNT(*) count FROM post_comments WHERE post_id = ${id};
    `;
    return data.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch post_comments data.');
  }
}

export async function getFriends(id: string) {
  noStore();

  const user = await getUser();
  if (!user) return;

  try {
    const data = await sql<UserFriend>`
    SELECT id, firstname, lastname, img_url, bio
    FROM auth_user
    WHERE id IN (
      SELECT target_id FROM friends WHERE source_id = ${id} AND status = 'accepted'
      UNION
      SELECT source_id FROM friends WHERE target_id = ${id} AND status = 'accepted'
    )

    `;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch friends.');
  }
}

export async function getRecommendedFriends() {
  noStore();

  const user = await getUser();
  if (!user) return;

  try {
    const data = await sql<UserFriend>`
    SELECT id, firstname, lastname, img_url, bio
    FROM auth_user
    WHERE id != ${user.id}
    AND id NOT IN (
      SELECT target_id FROM friends WHERE source_id = ${user.id}
      UNION
      SELECT source_id FROM friends WHERE target_id = ${user.id}
    )
    LIMIT 5;
    `;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch recommended friends.');
  }
}

export async function getFriendRequests() {
  noStore();

  const user = await getUser();
  if (!user) return;

  try {
    const data = await sql<UserFriend>`
    SELECT id, firstname, lastname, img_url, bio
    FROM auth_user
    WHERE id IN (
      SELECT source_id FROM friends WHERE target_id = ${user.id} AND status = 'pending'
    )
    `;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch friend requests.');
  }
}

export async function getFriendshipStatus(friendId: string) {
  noStore();

  const user = await getUser();
  if (!user) return;

  const client = createClient();
  await client.connect();

  try {
    const data = await client.sql<Friend>`
      SELECT *
      FROM friends
      WHERE (source_id = ${user.id} AND target_id = ${friendId})
      OR (source_id = ${friendId} AND target_id = ${user.id})
    `;
    return data.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch friend status.');
  } finally {
    await client.end();
  }
}

export async function getUserFoods(id: string, period: PeriodType) {
  noStore();

  const interval =
    period === 'today'
      ? '0'
      : period === 'week'
      ? '6'
      : period === 'month'
      ? '29'
      : '10000';

  const client = createClient();
  await client.connect();

  try {
    const data = await client.sql<Post>`
      SELECT *
      FROM posts
      WHERE user_id = ${id}
      AND post_type = 'food'
      AND created_at > current_date - CAST(${interval} AS INTEGER) * INTERVAL '1 DAY'
    `;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch user foods.');
  } finally {
    await client.end();
  }
}

export async function getUserWorkouts(id: string, period: PeriodType) {
  noStore();

  const interval =
    period === 'today'
      ? '0'
      : period === 'week'
      ? '6'
      : period === 'month'
      ? '29'
      : '10000';

  const client = createClient();
  await client.connect();

  try {
    const data = await client.sql<Post>`
      SELECT *
      FROM posts
      WHERE user_id = ${id}
      AND post_type = 'workout'
      AND created_at > current_date - CAST(${interval} AS INTEGER) * INTERVAL '1 DAY'
    `;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch user workouts.');
  } finally {
    await client.end();
  }
}

export async function getNotifications() {
  noStore();

  const user = await getUser();
  if (!user) return;

  const client = createClient();
  await client.connect();

  try {
    const data = await client.sql<NotificationWithUser>`
    SELECT notif.*, us.firstname, us.lastname, us.img_url
    FROM notifications notif JOIN auth_user us ON notif.sender_id = us.id
    WHERE notif.user_id = ${user.id}
    ORDER BY notif.created_at DESC
    `;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch notifications.');
  } finally {
    await client.end();
  }
}

export async function getNotificationsCount() {
  noStore();

  const user = await getUser();
  if (!user) return;

  const client = createClient();
  await client.connect();

  try {
    const data = await client.sql<{ count: number }>`
    SELECT COUNT(*) as count
    FROM notifications
    WHERE user_id = ${user.id}
    AND is_read = false
    `;
    return data.rows[0].count;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch notifications count.');
  } finally {
    await client.end();
  }
}

export async function isExistingToken(tokenId: string) {
  try {
    const data = await sql<{
      count: number;
    }>`SELECT COUNT(*) count FROM password_reset_token WHERE id = ${tokenId}`;
    return data.rows[0].count > 0;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to check if token exists.');
  }
}
