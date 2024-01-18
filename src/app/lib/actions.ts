'use server';

import { sql } from '@vercel/postgres';
import { getPageSession } from './utils';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Post } from './definitions';

export async function postContent(formData: FormData) {
  const session = await getPageSession();
  if (!session) {
    throw new Error('Not authenticated');
  }

  const title = String(formData.get('title'));
  const content = String(formData.get('content'));
  /* const img_url = formData.get('img_url') || ''; */
  const post_type = String(formData.get('post_type'));

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
      INSERT INTO posts (user_id, title, content, post_data, post_type)
      VALUES (${session.user.userId}, ${title}, ${content}, ${post_data}, ${post_type})
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to create post.');
  }

  revalidatePath(`/`);
  redirect(`/`);
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
