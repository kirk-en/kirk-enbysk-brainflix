import "./CommentsContainer.scss";
import CommentsField from "../CommentsField/CommentsField";
import CommentsList from "../CommentsList/CommentsList";


const CommentsContainer = ({ video }) => {



  return (
    <div className="comments-container">
      <CommentsField />
      <CommentsList video={video} />
    </div>
  );
};

export default CommentsContainer;
