"use client";

import { todoFormAction } from "@/server/todoForm/todoFormAction";
import { useFormState, useFormStatus } from "react-dom";

const initialState = {
  message: null,
};

export const TodoForm = () => {
  console.log("TodoForm");

  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(todoFormAction, initialState);

  console.log("state", state);

  return (
    <div className="mb-6">
      <div>New Task</div>
      <form action={formAction}>
        <div className="flex items-end w-full">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Type here"
              className="input input-bordered w-full"
              required
            />
          </div>
          <button className="btn btn-primary mx-4" type="submit" disabled={pending}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
