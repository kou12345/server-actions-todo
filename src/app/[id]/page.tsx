import { CommentForm } from "@/components/CommentForm";
import { CommentList } from "@/components/CommentList";
import { getTodo } from "@/server/todoList/todo";

export default async function Home({ params }: { params: { id: string } }) {
  const todo = await getTodo(params.id);
  console.log(todo);

  return (
    <div className="flex justify-center">
      <div className="w-2/3 flex flex-col items-center">
        <div className="text-xl">{todo?.title}</div>

        <CommentForm todoId={params.id} />

        <div className="my-3">
          <CommentList todoId={params.id} />
        </div>
      </div>
    </div>
  );
}
