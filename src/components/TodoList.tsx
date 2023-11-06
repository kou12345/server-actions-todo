"use server";

import { getTodoList } from "@/server/todoList/todoList";
import { Todo } from "@/types/types";
import { TodoListItem } from "./TodoListItem";

export const TodoList = async () => {
  console.log("TodoList");
  const todoList = await getTodoList();

  console.log("todoList", todoList);
  return (
    <div>
      <div>TodoList</div>
      {todoList?.map((todo: Todo, i) => {
        return <TodoListItem key={i} todo={todo} />;
      })}
    </div>
  );
};
