"use server";

import { todoFormAction } from "@/server/todoForm/todoFormAction";

export const TodoForm = async () => {
  console.log("TodoForm");

  return (
    <div>
      <div>TodoForm</div>
      <form action={todoFormAction}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Task</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
