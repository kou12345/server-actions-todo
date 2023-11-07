import { Todo } from "@/types/types";
import { asc, eq } from "drizzle-orm";
import "server-only";
import { db } from "../db";
import { todos } from "../db/schema";

export const getTodoList = async () => {
  console.log("getTodoList");
  try {
    const result = await db
      .select()
      .from(todos)
      .where(eq(todos.isDone, false))
      .orderBy(asc(todos.createdAt));

    const todoList: Todo[] = [];

    result.map((todo) => {
      todoList.push({
        id: todo.id,
        title: todo.title,
        user_id: todo.userId,
        is_done: todo.isDone,
        created_at: new Date(todo.createdAt),
        updated_at: new Date(todo.updatedAt),
      } as Todo);
    });

    return todoList;
  } catch (error) {
    console.log(error);
  }
};
