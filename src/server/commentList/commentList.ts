import { Comment } from "@/types/types";
import { desc, eq } from "drizzle-orm";
import "server-only";
import { db } from "../db";
import { comments } from "../db/schema";

export const getCommentList = async (todoId: string) => {
  console.log("getCommentList");
  console.log("todoId", todoId);

  try {
    const result = await db
      .select()
      .from(comments)
      .where(eq(comments.todoId, todoId))
      .orderBy(desc(comments.createdAt));

    const commentList: Comment[] = [];

    result.map((comment) => {
      commentList.push({
        id: comment.id,
        todoId: comment.todoId,
        userId: comment.userId,
        content: comment.content,
        createdAt: new Date(comment.createdAt),
        updatedAt: new Date(comment.updatedAt),
      } as Comment);
    });

    return commentList;
  } catch (error) {
    console.log(error);
  }
};
