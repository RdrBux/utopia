'use server';

import { sql } from '@vercel/postgres';
import { getUser, validateEmail } from './utils';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import {
  Friend,
  Notification,
  Post,
  PostSchema,
  foodDataSchema,
} from './definitions';
import { User, generateId } from 'lucia';
import { z } from 'zod';
import { del, put } from '@vercel/blob';
import { isWithinExpirationDate } from 'oslo';
import { lucia } from '@/auth/lucia';
import { Argon2id } from 'oslo/password';

const CreatePost = PostSchema.omit({
  id: true,
  created_at: true,
  post_data: true,
});

const workoutDataSchema = z.object({
  duration: z.coerce.number().nonnegative(),
});

export async function postContent(prevState: any, formData: FormData) {
  const user = await getUser();
  if (!user) {
    throw new Error('Not authenticated');
  }

  const image = formData.get('img_url') as File;

  const validatedFields = CreatePost.safeParse({
    user_id: user.id,
    title: formData.get('title'),
    content: formData.get('content'),
    post_type: formData.get('post_type'),
    post_privacy: formData.get('post_privacy'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'No se ha podrido crear la publicación.',
    };
  }

  const { user_id, title, content, post_type, post_privacy } =
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
    let blob;
    if (image.size > 0) {
      blob = await put(`posts/${image.name}`, image, {
        access: 'public',
      });
    }

    const img_url = blob && blob.url ? blob.url : null;

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
  const user = await getUser();
  if (!user) {
    throw new Error('Not authenticated');
  }

  try {
    const result = await sql`
      DELETE FROM posts
      WHERE id = ${postId} AND user_id = ${user.id}
      RETURNING img_url
    `;

    if (result.rows[0].img_url) {
      await del(result.rows[0].img_url);
    }
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
  const user = await getUser();
  if (!user) {
    throw new Error('Not authenticated');
  }

  try {
    await sql`
      UPDATE posts
      SET post_privacy = ${value}
      WHERE id = ${postId} AND user_id = ${user.id}
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to change post privacy.');
  }
  revalidatePath(`/posts/${postId}`);
}

const commentSchema = z.string().max(2000).min(1);

export async function commentPost(postId: string, content: string) {
  const user = await getUser();
  if (!user) {
    throw new Error('Not authenticated');
  }
  const userId = user.id;

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

export async function deleteComment(commentId: string, postId: string) {
  const user = await getUser();
  if (!user) {
    throw new Error('Not authenticated');
  }

  try {
    await sql`
      DELETE FROM post_comments
      WHERE id = ${commentId} AND user_id = ${user.id}
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to delete post comment.');
  }

  revalidatePath(`/posts/${postId}`);
}

export async function likePost(postId: string) {
  const user = await getUser();
  if (!user) {
    throw new Error('Not authenticated');
  }
  const userId = user.id;
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
  const user = await getUser();
  if (!user) {
    throw new Error('Not authenticated');
  }

  const userId = user.id;
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
  const user = await getUser();
  if (!user) {
    throw new Error('Not authenticated');
  }

  const userId = user.id;

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
  const user = await getUser();
  if (!user) {
    throw new Error('Not authenticated');
  }

  const userId = user.id;

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
  const user = await getUser();
  if (!user) {
    throw new Error('Not authenticated');
  }

  const userId = user.id;

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
  const user = await getUser();
  if (!user) {
    throw new Error('Not authenticated');
  }

  const userId = user.id;

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
  const user = await getUser();
  if (!user) {
    throw new Error('Not authenticated');
  }

  const userId = user.id;

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

const bioSchema = z.string().max(40);

export async function updateProfile(formData: FormData) {
  const user = await getUser();
  if (!user) {
    throw new Error('Not authenticated');
  }

  const userId = user.id;

  const image = formData.get('profile_img') as File;
  const bio = String(formData.get('profile_bio'));

  if (!bioSchema.safeParse(bio).success) {
    throw new Error('Invalid bio');
  }

  try {
    let blob;
    if (image.size > 0) {
      blob = await put(`profile/${userId}/image`, image, {
        access: 'public',
        addRandomSuffix: false,
      });
    }

    const img_url = blob && blob.url ? blob.url : null;

    // Update bio and img_url only if there is a new image
    await sql<User>`
      UPDATE auth_user SET
      bio = ${bio},
      img_url = COALESCE(${img_url}, img_url)
      WHERE id = ${userId}
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to update profile.');
  }

  revalidatePath(`/profile/${userId}/settings`);
}

export async function updatePrivacy(formData: FormData) {
  const user = await getUser();
  if (!user) {
    throw new Error('Not authenticated');
  }

  const userId = user.id;

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

/* export async function deleteAccount() {
  const user = await getUser();
  if (!user) {
    throw new Error('Not authenticated');
  }

  const userId = user.id;

  try {
    await auth.deleteUser(userId);
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to delete account.');
  }
  redirect('/login');
} */

export async function markNotificationsAsRead() {
  const user = await getUser();
  if (!user) {
    throw new Error('Not authenticated');
  }

  const userId = user.id;

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

export async function createPasswordResetToken(
  userId: string
): Promise<string> {
  try {
    await sql`
    DELETE FROM password_reset_token WHERE user_id = ${userId};
    `;
    const tokenId = generateId(40);
    await sql`
      INSERT INTO password_reset_token (id, user_id, expires_at) VALUES (${tokenId}, ${userId}, to_timestamp(${
      Date.now() / 1000 + 60 * 60 * 2
    }));
    `;
    return tokenId;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to create password reset token.');
  }
}

export async function createResetPassword(_: any, formData: FormData) {
  const email = String(formData.get('email'));

  if (!validateEmail(email)) {
    return {
      error: 'Correo inválido',
      type: 'email',
    };
  }

  try {
    const user = await sql<User>`
      SELECT * FROM auth_user
      WHERE email = ${email}
    `;
    if (!user || user.rows.length === 0) {
      return {
        error: 'No hay ninguna cuenta asociada a este correo',
        type: 'email',
      };
    }

    const verificationToken = await createPasswordResetToken(user.rows[0].id);
    const verificationLink =
      'http://localhost:3000/reset-password/' + verificationToken;

    console.log({ email: user.rows[0].email, verificationLink });
    /* await sendPasswordResetToken(email, verificationLink);
	  return new Response(null, {
		status: 200
	  }); */
    return {
      success: 'Se ha enviado un correo para restablecer la contraseña.',
      type: 'email',
    };
  } catch (error) {
    return {
      error: 'No se ha podido enviar el correo.',
      type: 'email',
    };
  }
}

export async function resetPassword(formData: FormData, tokenId: string) {
  const password = String(formData.get('password'));
  const repeatPassword = String(formData.get('repeat-password'));
  if (
    typeof password !== 'string' ||
    password.length < 6 ||
    password.length > 255
  ) {
    return {
      error: 'Contraseña debe tener entre 6 y 255 caracteres',
      type: 'password',
    };
  }
  if (password !== repeatPassword) {
    return {
      error: 'Las contraseñas no coinciden',
      type: 'repeat-password',
    };
  }

  try {
    const token = await sql`
      SELECT * FROM password_reset_token
      WHERE id = ${tokenId}
    `;

    if (token.rows.length > 0) {
      await sql`
        DELETE FROM password_reset_token
        WHERE id = ${tokenId}
      `;
    }

    if (
      !token ||
      token.rows.length === 0 ||
      !isWithinExpirationDate(token.rows[0].expires_at)
    ) {
      return {
        error: 'Token inválido',
        type: 'token',
      };
    }

    const user = await sql`
      SELECT * FROM auth_user
      WHERE id = ${token.rows[0].user_id}
    `;

    if (!user || user.rows.length === 0) {
      return {
        error: 'No hay ninguna cuenta asociada a este correo',
        type: 'token',
      };
    }

    await lucia.invalidateUserSessions(user.rows[0].id);

    const hashedPassword = await new Argon2id().hash(password);
    await sql`
      UPDATE password
      SET hashed_password = ${hashedPassword}
      WHERE user_id = ${user.rows[0].id}
    `;
    return {
      success: 'Contraseña actualizada correctamente.',
      type: 'token',
    };
  } catch (error) {
    return {
      error: 'No se ha podido cambiar la contraseña.',
      type: 'token',
    };
  }
}
