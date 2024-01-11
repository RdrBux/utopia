import { sql } from '@vercel/postgres';
import { CommentPost, PostFoodType } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function getFoods() {
  noStore();

  try {
    const data = await sql<PostFoodType>`
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
    const data = await sql<PostFoodType>`
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
    const data = await sql<CommentPost>`
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
    throw new Error('Failed to fetch post_food data.');
  }
}
