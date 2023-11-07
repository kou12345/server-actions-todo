"use server";

import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { db } from "../db";
import { todos } from "../db/schema";

export async function doneAction(id: string, formData: FormData) {
  console.log("doneAction");
  console.log("id", id);

  try {
    const result = await db
      .update(todos)
      .set({
        isDone: true,
      })
      .where(eq(todos.id, id));

    console.log("result", result);
  } catch (error) {
    console.log(error);
  }

  redirect("/");
}
