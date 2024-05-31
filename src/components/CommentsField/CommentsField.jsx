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
              <input
                className="comments__field"
                type="text"
                name="name"
                placeholder="Enter your name"
                autoComplete="off"
                required
              />
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
