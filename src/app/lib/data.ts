import { sql } from '@vercel/postgres';
import { PostFoodType } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function getFoods() {
  noStore();

  try {
    const data =
      await sql<PostFoodType>`SELECT us.id user_id, us.firstname, us.lastname, us.img_url user_img_url, pf.id, pf.food_name, pf.img_url, pf.content, pf.carbs, pf.proteins, pf.fats, pf.kilo_cals, pf.created_at
		FROM users us JOIN post_food pf ON us.id = pf.user_id;`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch post_food data.');
  }
}
