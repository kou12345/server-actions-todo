import { Todo } from "@/types/types";

type Props = {
  todo: Todo;
};

export const TodoListItem = (props: Props) => {
  return (
    <div className="mt-6">
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{props.todo.title}</h2>
          <p>We are using cookies for no reason.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Accept</button>
          </div>
        </div>
      </div>
    </div>
  );
};
