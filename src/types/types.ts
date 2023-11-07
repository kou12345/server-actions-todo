export type Todo = {
  title: string;
  id: string;
  user_id: string;
  is_done: boolean;
  created_at: Date;
  updated_at: Date;
};

export type Comment = {
  id: string;
  todoId: string;
  userId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
};
