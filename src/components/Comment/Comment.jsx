import "./Comment.scss";

const Comment = ({ comment }) => {
  return (
    <>
      <article className="comments__flex">
        <img
          className="comments__profile-image comments__profile-image--posted"
          src="./assets/images/Mohan-muruge.jpg"
          alt="profile picture"
        />
        <div className="comments__content-container">
          <div className="comments__flex comments__flex--post-info">
            <span className="comments__name">{comment.name}</span>
            <span className="comments__date">{new Date(comment.timestamp).toLocaleDateString()}</span>
          </div>
          <p className="comments__content">
            {comment.comment}
          </p>
        </div>
      </article>
      <div className="divide-line"></div>
    </>
  );
};

export default Comment;
