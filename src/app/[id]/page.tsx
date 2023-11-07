import { getTodo } from "@/server/todoList/todo";

export default async function Home({ params }: { params: { id: number } }) {
  const todo = await getTodo(params.id);
  console.log(todo);

  return (
    <div>
      <div>{params.id}</div>

      <div>{todo?.title}</div>
    </div>
  );
}
