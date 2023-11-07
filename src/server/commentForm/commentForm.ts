"use server";

import { currentUser } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { db } from "../db";
import { comments } from "../db/schema";

export async function commentFormAction(todoId: string, formData: FormData) {
  console.log("commentFormAction");

  const content = formData.get("content") as string;
  console.log("content", content);

  const user = await currentUser();

  try {
    const result = await db.insert(comments).values({
      userId: user?.id as string,
      todoId: todoId,
      content: content,
    });

    console.log("result", result);

    return revalidatePath(`/${todoId}`);
  } catch (error) {
    if (error instanceof Error) {
      return;
    }
  }
}
