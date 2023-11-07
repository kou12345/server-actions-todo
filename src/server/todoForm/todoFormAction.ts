"use server";

import { currentUser } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { db } from "../db/index";
import { todos } from "../db/schema";

export async function todoFormAction(prevState: any, formData: FormData) {
  console.log("todoFormAction");

  const title = formData.get("title");
  console.log("title", title);

  const user = await currentUser();
  console.log("user", user);

  try {
    console.log("try");
    if (title === null) throw new Error("title is null");
    if (user === null) throw new Error("user is null");

    const result = await db.insert(todos).values({
      user_id: user.id as string,
      title: title as string,
    });

    console.log("result", result);
    return revalidatePath("/");
  } catch (error) {
    if (error instanceof Error) {
      return { message: error.message };
    }
  }
}
