'use server';

import { sql } from '@vercel/postgres';
import { getPageSession } from './utils';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import {
  Friend,
  Notification,
  Post,
  PostSchema,
  foodDataSchema,
} from './definitions';
import { User } from 'lucia';
import { auth } from '@/auth/lucia';
import { z } from 'zod';
import { put } from '@vercel/blob';

const CreatePost = PostSchema.omit({
  id: true,
  created_at: true,
  post_data: true,
});

const workoutDataSchema = z.object({
  duration: z.coerce.number().nonnegative(),
});

export async function postContent(prevState: any, formData: FormData) {
  const session = await getPageSession();
  if (!session) {
    throw new Error('Not authenticated');
  }

  const image = formData.get('img_url') as File;
  const blob = await put(`posts/${image.name}`, image, {
    access: 'public',
  });

  const validatedFields = CreatePost.safeParse({
    user_id: session.user.userId,
    title: formData.get('title'),
    content: formData.get('content'),
    img_url: blob.url,
    post_type: formData.get('post_type'),
    post_privacy: formData.get('post_privacy'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'No se ha podrido crear la publicación.',
    };
  }

  const { user_id, title, content, img_url, post_type, post_privacy } =
    validatedFields.data;

  // Prepare post_data for insertion into the database
  let post_data = null;

  if (post_type === 'food') {
    const proteins = formData.get('food-proteins');
    const carbs = formData.get('food-carbs');
    const fats = formData.get('food-fats');
    const kcals = formData.get('food-kcal');

    const foodData = foodDataSchema.safeParse({
      proteins,
      carbs,
      fats,
      kcals,
    });

    if (!foodData.success) {
      return {
        /* errors: foodData.error.flatten().fieldErrors, */
        message:
          'Datos de los macronutrientes incorrectos. No se ha podido crear la publicación.',
      };
    }
    post_data = JSON.stringify(foodData.data);
  }
  if (post_type === 'workout') {
    const duration = formData.get('workout-duration');

    const workoutData = workoutDataSchema.safeParse({
      duration,
    });

    if (!workoutData.success) {
      return {
        /* errors: workoutData.error.flatten().fieldErrors, */
        message:
          'Duración del entrenamiento incorrecta. No se ha podido crear la publicación.',
      };
    }

    post_data = JSON.stringify(workoutData.data);
  }

  let result = null;
  try {
    result = await sql<Post>`
      INSERT INTO posts (user_id, title, content, img_url, post_data, post_type, post_privacy)
      VALUES (${user_id}, ${title}, ${content}, ${img_url}, ${post_data}, ${post_type}, ${post_privacy})
      RETURNING id
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to create post.');
  }

  redirect(`/posts/${result?.rows[0].id}`);
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

const commentSchema = z.string().max(2000).min(1);

export async function commentPost(postId: string, content: string) {
  const session = await getPageSession();
  if (!session) {
    throw new Error('Not authenticated');
  }
  const userId = session.user.userId;

  const validatedComment = commentSchema.safeParse(content);

  if (!validatedComment.success) {
    return {
      errors: validatedComment.error.flatten().fieldErrors,
      message: 'No se ha podido crear el comentario.',
    };
  }

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
  revalidatePath(`/profile/${targetId}`);
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

  revalidatePath(`/profile/${sourceId}`);
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

  revalidatePath(`/profile/${sourceId}`);
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

  revalidatePath(`/profile/${targetId}`);
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

  revalidatePath(`/profile/${targetId}`);
}

export async function updateProfile(formData: FormData) {
  const session = await getPageSession();
  if (!session) {
    throw new Error('Not authenticated');
  }

  const userId = session.user.userId;

  const image = formData.get('profile_img') as File;
  const blob = await put(`profile/${userId}/image`, image, {
    access: 'public',
    addRandomSuffix: false,
  });
  const bio = String(formData.get('profile_bio'));

  try {
    await sql<User>`
      UPDATE auth_user
      SET bio = ${bio}, img_url = ${blob.url}
      WHERE id = ${userId}
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to update profile.');
  }

  revalidatePath(`/profile/${userId}/settings`);
}

export async function updatePrivacy(formData: FormData) {
  const session = await getPageSession();
  if (!session) {
    throw new Error('Not authenticated');
  }

  const userId = session.user.userId;

  const privacy_statistics = String(formData.get('privacy-statistics'));
  const privacy_friends = String(formData.get('privacy-friends'));

  try {
    await sql<User>`
      UPDATE auth_user
      SET privacy_statistics = ${privacy_statistics}, privacy_friends = ${privacy_friends}
      WHERE id = ${userId}
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to update privacy.');
  }
  revalidatePath(`/profile/${userId}/settings`);
}

export async function deleteAccount() {
  const session = await getPageSession();
  if (!session) {
    throw new Error('Not authenticated');
  }

  const userId = session.user.userId;

  try {
    await auth.deleteUser(userId);
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to delete account.');
  }
  redirect('/login');
}

export async function markNotificationsAsRead() {
  const session = await getPageSession();
  if (!session) {
    throw new Error('Not authenticated');
  }

  const userId = session.user.userId;

  try {
    await sql<Notification>`
      UPDATE notifications
      SET is_read = true
      WHERE user_id = ${userId}
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to mark notifications as read.');
  }
}
