'use server';

import { sql } from '@vercel/postgres';
import { getPageSession } from './utils';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Friend, Post } from './definitions';

export async function postContent(formData: FormData) {
  const session = await getPageSession();
  if (!session) {
    throw new Error('Not authenticated');
  }

  const title = String(formData.get('title'));
  const content = String(formData.get('content'));
  /* const img_url = formData.get('img_url') || ''; */
  const post_type = String(formData.get('post_type'));
  const post_privacy = String(formData.get('post_privacy'));

  let post_data = null;
  if (post_type === 'food') {
    const proteins = formData.get('food-proteins');
    const carbs = formData.get('food-carbs');
    const fats = formData.get('food-fats');
    const kcals = formData.get('food-kcal');

    post_data = JSON.stringify({ proteins, carbs, fats, kcals });
  }
  if (post_type === 'workout') {
    const duration = formData.get('workout-duration');

    post_data = JSON.stringify({ duration });
  }

  try {
    await sql<Post>`
      INSERT INTO posts (user_id, title, content, post_data, post_type, post_privacy)
      VALUES (${session.user.userId}, ${title}, ${content}, ${post_data}, ${post_type}, ${post_privacy})
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to create post.');
  }

  revalidatePath(`/`);
  redirect(`/`);
}

export async function deletePost(postId: string) {
  const session = await getPageSession();
  if (!session) {
    throw new Error('Not authenticated');
  }

  try {
    await sql`
      DELETE FROM posts
      WHERE id = ${postId} AND user_id = ${session.user.userId}
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to delete post.');
  }
  revalidatePath('/');
  redirect('/');
}

export async function changePostPrivacy(
  postId: string,
  value: Post['post_privacy']
) {
  const session = await getPageSession();
  if (!session) {
    throw new Error('Not authenticated');
  }

  try {
    await sql`
      UPDATE posts
      SET post_privacy = ${value}
      WHERE id = ${postId} AND user_id = ${session.user.userId}
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to change post privacy.');
  }
  revalidatePath(`/posts/${postId}`);
}

export async function commentPost(postId: string, content: string) {
  const session = await getPageSession();
  if (!session) {
    throw new Error('Not authenticated');
  }
  const userId = session.user.userId;

  try {
    await sql`
      INSERT INTO post_comments (post_id, user_id, content)
      VALUES (${postId}, ${userId}, ${content})
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to create post comment.');
  }

  revalidatePath(`/posts/${postId}`);
}

export async function likePost(postId: string) {
  const session = await getPageSession();
  if (!session) {
    throw new Error('Not authenticated');
  }
  const userId = session.user.userId;

  try {
    await sql`
      INSERT INTO post_likes (post_id, user_id)
      VALUES (${postId}, ${userId})
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to like post.');
  }
  console.log('clicked');

  revalidatePath(`/posts/${postId}`);
}

export async function removeLikePost(postId: string) {
  const session = await getPageSession();
  if (!session) {
    throw new Error('Not authenticated');
  }

  const userId = session.user.userId;
  try {
    await sql`
      DELETE FROM post_likes
      WHERE post_id = ${postId} AND user_id = ${userId}
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to unlike post.');
  }

  revalidatePath(`/posts/${postId}`);
}

export async function sendFriendRequest(targetId: string) {
  const session = await getPageSession();
  if (!session) {
    throw new Error('Not authenticated');
  }

  const userId = session.user.userId;

  try {
    await sql<Friend>`
      INSERT INTO friends (source_id, target_id, status)
      VALUES (${userId}, ${targetId}, 'pending')
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to send friend request.');
  }
}

export async function acceptFriendRequest(sourceId: string) {
  const session = await getPageSession();
  if (!session) {
    throw new Error('Not authenticated');
  }

  const userId = session.user.userId;

  try {
    await sql<Friend>`
      UPDATE friends
      SET status = 'accepted'
      WHERE source_id = ${sourceId} AND target_id = ${userId}
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to accept friend request.');
  }
}

export async function rejectFriendRequest(sourceId: string) {
  const session = await getPageSession();
  if (!session) {
    throw new Error('Not authenticated');
  }

  const userId = session.user.userId;

  try {
    await sql<Friend>`
      UPDATE friends
      SET status = 'rejected'
      WHERE source_id = ${sourceId} AND target_id = ${userId}
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to reject friend request.');
  }
}

export async function cancelFriendRequest(targetId: string) {
  const session = await getPageSession();
  if (!session) {
    throw new Error('Not authenticated');
  }

  const userId = session.user.userId;

  try {
    await sql<Friend>`
      DELETE FROM friends
      WHERE source_id = ${userId} AND target_id = ${targetId}
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to cancel friend request.');
  }
}

export async function removeFriend(targetId: string) {
  const session = await getPageSession();
  if (!session) {
    throw new Error('Not authenticated');
  }

  const userId = session.user.userId;

  try {
    await sql<Friend>`
      DELETE FROM friends
      WHERE source_id = ${targetId} AND target_id = ${userId}
      OR source_id = ${userId} AND target_id = ${targetId}
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to remove friend.');
  }
}
