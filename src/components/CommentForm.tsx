"use client";

import { commentFormAction } from "@/server/commentForm/commentForm";
import { useState } from "react";

type Props = {
  todoId: string;
};

export const CommentForm = (props: Props) => {
  const commentFormActionWithId = commentFormAction.bind(null, props.todoId);

  const [input, setInput] = useState<string>("");
  return (
    <div>
      <form
        action={async (formData) => {
          commentFormActionWithId(formData);
          setInput("");
        }}
      >
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
              onChange={(e) => setInput(e.target.value)}
              value={input}
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
