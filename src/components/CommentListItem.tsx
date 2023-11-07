import { Comment } from "@/types/types";

type Props = {
  comment: Comment;
};
export const CommentListItem = (props: Props) => {
  return (
    <div className="card w-96 bg-neutral text-neutral-content my-3">
      <div className="card-body items-center text-center w-full">
        <p className="text-lg break-all">{props.comment.content}</p>
        <p className="text-sm">投稿日時: {props.comment.createdAt.toLocaleString("ja-JP")}</p>
      </div>
    </div>
  );
};
