'use server';

import { sql } from '@vercel/postgres';
import { getPageSession } from './utils';
import { Food } from './definitions';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function postFood(formData: FormData) {
  const session = await getPageSession();
  if (!session) {
    throw new Error('Not authenticated');
  }
  const food_name = '' + formData.get('food-name');
  const content = '' + formData.get('food-content');
  const img_url = '' + formData.get('food-image');
  const proteins = Number(formData.get('food-proteins'));
  const carbs = Number(formData.get('food-carbs'));
  const fats = Number(formData.get('food-fats'));
  const kilo_cals = Number(formData.get('food-kilo-cals'));

  try {
    await sql<Food>`
      INSERT INTO food (user_id, food_name, img_url, content, proteins, carbs, fats, kilo_cals)
      VALUES (${session.user.userId}, ${food_name}, ${img_url}, ${content}, ${proteins}, ${carbs}, ${fats}, ${kilo_cals})
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to create food.');
  }

  revalidatePath(`/profile/${session.user.userId}`);
  redirect(`/profile/${session.user.userId}`);
}
