"use client";

import { todoFormAction } from "@/server/todoForm/todoFormAction";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

const initialState = {
  message: null,
};

export const TodoForm = () => {
  console.log("TodoForm");

  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(todoFormAction, initialState);

  const [input, setInput] = useState<string>("");
  console.log("input", input);

  console.log("state", state);

  return (
    <div className="mb-6">
      <div>New Task</div>
      <form
        action={async (formData) => {
          formAction(formData);
          setInput("");
        }}
      >
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
              onChange={(e) => setInput(e.target.value)}
              value={input}
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
