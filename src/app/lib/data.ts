import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { CommentPost, PostWithUser, UserData, UserFriend } from './definitions';
import { getPageSession } from './utils';

export async function getUserById(id: string) {
  noStore();

  try {
    const data = await sql<UserData>`
    SELECT * FROM auth_user
    WHERE id = ${id};
    `;
    return data.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch user data.');
  }
}

export async function getUsersByQuery(query: string, ignoreId: string) {
  noStore();

  try {
    const data = await sql<UserData>`
      SELECT * FROM auth_user
      WHERE firstname || ' ' || lastname ILIKE '%' || ${query} || '%'
      AND id != ${ignoreId}
    `;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch user data.');
  }
}

export async function getPosts() {
  noStore();

  try {
    const data = await sql<PostWithUser>`
      SELECT us.id user_id, us.firstname, us.lastname, us.img_url user_img_url, po.id, po.title, po.content, po.img_url, po.post_type, po.post_data, po.created_at
      FROM auth_user us JOIN posts po ON us.id = po.user_id
      ORDER BY created_at DESC
      `;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch post data.');
  }
}

export async function getPostById(id: string) {
  noStore();

  try {
    const data = await sql<PostWithUser>`
      SELECT us.id user_id, us.firstname, us.lastname, us.img_url user_img_url, po.id, po.title, po.content, po.img_url, po.post_type, po.post_data, po.created_at
      FROM auth_user us JOIN posts po ON us.id = po.user_id
      WHERE po.id = ${id};
    `;
    return data.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch post data.');
  }
}

export async function getPostsByQuery(query: string) {
  noStore();

  try {
    const data = await sql<PostWithUser>`
      SELECT us.id user_id, us.firstname, us.lastname, us.img_url user_img_url, po.id, po.title, po.content, po.img_url, po.post_type, po.post_data, po.created_at
      FROM auth_user us JOIN posts po ON us.id = po.user_id
      WHERE po.title ILIKE '%' || ${query} || '%' OR po.content ILIKE '%' || ${query} || '%'
      ORDER BY created_at DESC
      `;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch post data.');
  }
}

export async function getUserPosts(id: string) {
  noStore();

  const session = await getPageSession();
  if (!session) return;

  try {
    const data = await sql<PostWithUser>`
      SELECT us.id user_id, us.firstname, us.lastname, us.img_url user_img_url, po.id, po.title, po.content, po.img_url, po.post_type, po.post_data, po.created_at
      FROM auth_user us JOIN posts po ON us.id = po.user_id
      WHERE us.id = ${id}
      ORDER BY created_at DESC
      `;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch post data.');
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

  const session = await getPageSession();
  if (!session) return;

  try {
    const data = await sql<{ count: number }>`
      SELECT COUNT(*) count FROM post_likes WHERE post_id = ${id} AND user_id = ${session.user.userId};
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

export async function getRecommendedFriends() {
  noStore();

  const session = await getPageSession();
  if (!session) return;

  try {
    const data = await sql<UserFriend>`
    SELECT id, firstname, lastname, img_url, bio
    FROM auth_user
    WHERE id != ${session.user.userId}
    LIMIT 5;
    `;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch recommended friends.');
  }
}
