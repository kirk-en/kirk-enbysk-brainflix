import "./Comment.scss";

const Comment = ({ comment }) => {
  return (
    <>
      <section className="comments__posted-comment-container">
        <div className="comments__flex">
          <div className="comments__profile-image comments__profile-image--posted" />
          <div className="comments__content-container">
            <div className="comments__flex comments__flex--post-info">
              <span className="comments__name">{comment.name}</span>
              <span className="comments__date">
                {new Date(comment.timestamp).toLocaleDateString()}
              </span>
            </div>
            <p className="comments__content">{comment.comment}</p>
          </div>
        </div>
      </section>
      <div className="divide-line"></div>
    </>
  );
};

export default Comment;
