import { deleteAction } from "@/server/todoListItem/deleteAction";
import { doneAction } from "@/server/todoListItem/doneAction";
import { Todo } from "@/types/types";
import Link from "next/link";

type Props = {
  todo: Todo;
};

export const TodoListItem = (props: Props) => {
  const doneActionWithId = doneAction.bind(null, props.todo.id);
  const deleteActionWithId = deleteAction.bind(null, props.todo.id);
  return (
    <div className="mt-6">
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{props.todo.title}</h2>
          <p>We are using cookies for no reason.</p>
          <div className="card-actions justify-end">
            <form action={doneActionWithId}>
              <button className="btn btn-accent">Done</button>
            </form>
            <form action={deleteActionWithId}>
              <button className="btn btn-secondary">Delete</button>
            </form>
            <Link href={`${props.todo.id}`} className="btn btn-primary">
              Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
