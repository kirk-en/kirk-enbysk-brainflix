import "./CommentsContainer.scss";

import CommentsField from "../CommentsField/CommentsField";

import CommentsList from "../CommentsList/CommentsList";
import profileImage from "../../assets/images/Mohan-muruge.jpg";
import icon from "../../assets/icons/add_comment.svg";
import axios from "axios";
import { useEffect } from "react";

const CommentsContainer = ({ loadedVideo }) => {



  const postComment = async (comment) => {
    try {
      const response = await axios.post(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${loadedVideo.id}/comments?api_key=kirk101`, {name: 'Kirk', comment: `Wow great!${Math.random()}`});
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    postComment();
  }, [])

  return (
    <div className="comments-container">
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
                className="text-input-field"
                name="comment"
                placeholder="Add a new comment"
                required
              ></textarea>
            </label>
            <button type="submit" className="comments__btn">
              <img
                className="comments__icon"
                src={icon}
                alt="leave comment icon"
              />
              comment
            </button>
          </form>
        </div>
      </section>
      <div className="divide-line"></div>
      <CommentsList loadedVideo={loadedVideo} />
    </div>
  );
};

export default CommentsContainer;
