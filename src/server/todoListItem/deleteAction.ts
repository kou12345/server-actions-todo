"use server";

import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { db } from "../db";
import { todos } from "../db/schema";

export async function deleteAction(id: string, formData: FormData) {
  console.log("deleteAction");
  console.log("id", id);

  try {
    const result = await db.delete(todos).where(eq(todos.id, id));

    console.log("result", result);
  } catch (error) {
    console.log(error);
  }

  redirect("/");
}
