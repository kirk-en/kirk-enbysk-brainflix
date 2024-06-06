import "./CommentsList.scss";
import Comment from "../Comment/Comment";

const CommentsList = ({ loadedVideo }) => {
  return (
    <>
      {loadedVideo.comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </>
  );
};

export default CommentsList;
