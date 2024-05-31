import "./CommentsField.scss";
import profileImage from '../../assets/images/Mohan-muruge.jpg'

const CommentsField = () => {
  return (
    <>
      <section className="comments">
        <div className="comments__flex">
          <img
            className="comments__profile-image"
            src={profileImage}
            alt="profile picture"
          />
          <form className="comments__form">
            <label className="comments__label">
              <span className="comments__text">join the conversation</span>
              <textarea
                className="comments__field comments__field--no-resize"
                name="comment"
                placeholder="Add a new comment"
                required
              ></textarea>
            </label>
            <button type="submit" className="comments__btn">
              comment
            </button>
          </form>
        </div>
      </section>
      <div className="divide-line divide-line--pad"></div>
    </>
  );
};

export default CommentsField;
