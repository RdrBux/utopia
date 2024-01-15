/* export type User = {
  id: string;
  firstname: string;
  lastname: string;
  img_url: string;
  email: string;
  password: string;
  bio: string;
  date_of_birth: string;
  created_at: string;
}; */

export type Food = {
  id: string;
  user_id: string;
  food_name: string;
  img_url: string;
  content: string;
  carbs?: number;
  proteins?: number;
  fats?: number;
  kilo_cals?: number;
  created_at: string;
};

export interface PostFoodType extends Food {
  user_id: string;
  firstname: string;
  lastname: string;
  user_img_url: string;
}

export type PostWorkout = {
  id: string;
  user_id: string;
  duration: number;
  title: string;
  content: string;
  img_url: string;
  created_at: string;
};

export type PostRest = {
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
  status: 'rejected' | 'accepted' | 'pending';
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
  user_id: string;
  firstname: string;
  lastname: string;
  img_url: string;
}

export type UserFriend = {
  id: string;
  firstname: string;
  lastname: string;
  img_url: string;
  bio: string;
};
