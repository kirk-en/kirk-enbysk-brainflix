import "./CommentsContainer.scss";
import CommentsField from "../CommentsField/CommentsField";
import Comment from "../Comment/Comment";

const CommentsContainer = ({ loadedVideo }) => {
  return (
    <div className="comments-container">
      <CommentsField />
      {loadedVideo.comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </div>
  );
};

export default CommentsContainer;
