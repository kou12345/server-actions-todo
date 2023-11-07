import { Todo } from "@/types/types";
import { eq } from "drizzle-orm";
import "server-only";
import { db } from "../db";
import { todos } from "../db/schema";

export const getTodo = async (id: number) => {
  console.log("getTodo");
  try {
    const result = await db.select().from(todos).where(eq(todos.id, id));

    console.log("result", result);

    if (result) {
      const todo: Todo = {
        id: result[0].id,
        title: result[0].title,
        user_id: result[0].user_id,
        is_done: result[0].is_done,
        created_at: new Date(result[0].created_at),
        updated_at: new Date(result[0].updated_at),
      };

      return todo;
    }
  } catch (error) {
    console.log(error);
  }
};
