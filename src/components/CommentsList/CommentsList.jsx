import "./CommentsList.scss";
import Comment from "../Comment/Comment";

const CommentsList = ({ video }) => {
  return (
    <>
      {video.comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </>
  );
};

export default CommentsList;
