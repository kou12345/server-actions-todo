import { Todo } from "@/types/types";
import "server-only";
import { db } from "../db";
import { todos } from "../db/schema";

export const getTodoList = async () => {
  console.log("getTodoList");
  try {
    const result = await db.select().from(todos);

    const todoList: Todo[] = [];

    result.map((todo) => {
      todoList.push({
        id: todo.id,
        title: todo.title,
        user_id: todo.user_id,
        is_done: todo.is_done,
        created_at: new Date(todo.created_at),
        updated_at: new Date(todo.updated_at),
      } as Todo);
    });

    return todoList;
  } catch (error) {
    console.log(error);
  }
};
