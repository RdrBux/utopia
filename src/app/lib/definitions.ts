export type Post = {
  id: string;
  user_id: string;
  title: string;
  content: string;
  img_url: string;
  post_type: 'food' | 'workout' | 'general';
  post_data?: string;
  created_at: string;
};

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
