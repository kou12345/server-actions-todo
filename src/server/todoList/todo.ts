import { Todo } from "@/types/types";
import { eq } from "drizzle-orm";
import "server-only";
import { db } from "../db";
import { todos } from "../db/schema";

export const getTodo = async (id: string) => {
  console.log("getTodo");
  try {
    const result = await db.select().from(todos).where(eq(todos.id, id));

    console.log("result", result);

    if (result) {
      const todo: Todo = {
        id: result[0].id,
        title: result[0].title,
        user_id: result[0].userId,
        is_done: result[0].isDone,
        created_at: new Date(result[0].createdAt),
        updated_at: new Date(result[0].updatedAt),
      };

      return todo;
    }
  } catch (error) {
    console.log(error);
  }
};
