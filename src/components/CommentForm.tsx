import { commentFormAction } from "@/server/commentForm/commentForm";

type Props = {
  todoId: string;
};

export const CommentForm = (props: Props) => {
  const commentFormActionWithId = commentFormAction.bind(null, props.todoId);
  return (
    <div>
      <form action={commentFormActionWithId}>
        <div className="flex items-end w-full">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Add Comment</span>
            </label>
            <input
              type="text"
              name="content"
              placeholder="Type here"
              className="input input-bordered w-full"
              required
            />
          </div>
          <button className="btn btn-primary mx-4" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
