import { User } from 'lucia';
import { z } from 'zod';

export interface UserData extends User {
  id: string;
}

export const PostSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  title: z
    .string({ invalid_type_error: 'Se requiere un título.' })
    .min(1, { message: 'Se requiere un título.' })
    .max(200, { message: 'El título no puede superar los 200 caracteres.' }),
  content: z
    .string()
    .max(2000, {
      message: 'El contenido no puede superar los 2000 caracteres.',
    })
    .optional(),
  img_url: z.string().optional(),
  post_type: z.enum(['general', 'food', 'workout'], {
    invalid_type_error: 'Formato del post no válido.',
  }),
  post_data: z.string().nullable(),
  post_privacy: z.enum(['all', 'friends', 'me'], {
    invalid_type_error: 'Formato de la visibilidad no válido.',
  }),
  created_at: z.date(),
});

export type Post = z.infer<typeof PostSchema>;

/* export type Post = {
  id: string;
  user_id: string;
  title: string;
  content?: string;
  img_url?: string;
  post_type: 'food' | 'workout' | 'general';
  post_data: string | null;
  post_privacy: 'all' | 'friends' | 'me';
  created_at: string;
}; */

export interface PostWithUser extends Post {
  firstname: string;
  lastname: string;
  user_img_url: string;
}

export const foodDataSchema = z.object({
  proteins: z.coerce
    .number()
    .nonnegative()
    .max(10000, { message: 'Exceso de proteínas.' }),
  carbs: z.coerce
    .number()
    .nonnegative()
    .max(10000, { message: 'Exceso de carbohidratos.' }),
  fats: z.coerce
    .number()
    .nonnegative()
    .max(10000, { message: 'Exceso de grasas.' }),
  kcals: z.coerce
    .number()
    .nonnegative()
    .max(100000, { message: 'Exceso de kilocalorías.' }),
});

export type FoodData = z.infer<typeof foodDataSchema>;

export type Rest = {
  id: string;
  user_id: string;
  start_time: string;
  end_time: string;
  created_at: string;
};

export type Friend = {
  id: string;
  source_id: string;
  target_id: string;
  status: 'pending' | 'accepted' | 'rejected';
  created_at: string;
};

export type Like = {
  id: string;
  post_id: string;
  user_id: string;
  created_at: string;
};

export type Comment = {
  id: string;
  post_id: string;
  user_id: string;
  content: string;
  created_at: string;
};

export interface CommentPost extends Comment {
  firstname: string;
  lastname: string;
  img_url: string;
}

export type UserFriend = {
  id: string;
  firstname: string;
  lastname: string;
  img_url?: string;
  bio?: string;
};
