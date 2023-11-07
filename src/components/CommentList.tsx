import { getCommentList } from "@/server/commentList/commentList";
import { CommentListItem } from "./CommentListItem";

type Props = {
  todoId: string;
};

export const CommentList = async (props: Props) => {
  const commentList = await getCommentList(props.todoId);

  return (
    <div>
      <div>Comments</div>

      {commentList?.map((comment, i) => {
        return <CommentListItem key={i} comment={comment} />;
      })}
    </div>
  );
};
