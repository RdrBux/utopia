import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { UserFriend } from './definitions';
import { getPageSession } from './utils';

export async function getUserById(id: string) {
  noStore();

  try {
    const data = await sql`
    SELECT * FROM auth_user
    WHERE id = ${id};
    `;
    return data.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch user data.');
  }
}

export async function getFoods() {
  noStore();

  try {
    const data = await sql`
      SELECT us.id user_id, us.firstname, us.lastname, us.img_url user_img_url, pf.id, pf.food_name, pf.img_url, pf.content, pf.carbs, pf.proteins, pf.fats, pf.kilo_cals, pf.created_at
		  FROM users us JOIN post_food pf ON us.id = pf.user_id;`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch post_food data.');
  }
}

export async function getFoodById(id: string) {
  noStore();

  try {
    const data = await sql`
      SELECT us.id user_id, us.firstname, us.lastname, us.img_url user_img_url, pf.id, pf.food_name, pf.img_url, pf.content, pf.carbs, pf.proteins, pf.fats, pf.kilo_cals, pf.created_at
      FROM users us JOIN post_food pf ON us.id = pf.user_id
      WHERE pf.id = ${id};
    `;

    return data.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch post_food data.');
  }
}

export async function getFoodComments(id: string) {
  noStore();

  try {
    const data = await sql`
      SELECT us.id user_id, us.firstname, us.lastname, us.img_url, fc.id, fc.content, fc.created_at
      FROM food_comments fc JOIN users us ON fc.user_id = us.id
      WHERE post_id = ${id}
      `;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch post_food data.');
  }
}

export async function getFoodLikesCount(id: string) {
  noStore();

  try {
    const data = await sql`
      SELECT COUNT(*) count FROM food_likes WHERE post_id = ${id};
    `;
    return data.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch food_likes data.');
  }
}

export async function getFoodCommentsCount(id: string) {
  noStore();

  try {
    const data = await sql`
      SELECT COUNT(*) count FROM food_comments WHERE post_id = ${id};
    `;
    return data.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch food_comments data.');
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
