import "./CommentsContainer.scss";
import CommentsField from "../CommentsField/CommentsField";
import CommentsList from "../CommentsList/CommentsList";


const CommentsContainer = ({ loadedVideo }) => {



  return (
    <div className="comments-container">
      <CommentsField />
      <CommentsList loadedVideo={loadedVideo} />
    </div>
  );
};

export default CommentsContainer;
