import "./VideoInfo.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";

const VideoInfo = ({ loadedVideo }) => {
  return (
    <section className="vid-info">
      <h1 className="main-title">{loadedVideo.title}</h1>
      <div className="divide-line divide-line--mobile"></div>
      <div className="vid-info__details">
        <article className="vid-info__details-group">
          <span className="vid-info__author vid-info__details-item">
            By {loadedVideo.channel}
          </span>
          <span className="vid-info__subtitle vid-info__details-item">
            {new Date(loadedVideo.timestamp).toLocaleDateString()}
          </span>
        </article>

        <article className="vid-info__details-group vid-info__details-group--right">
          <div className="vid-info__count-container vid-info__details-item">
            <img className="vid-info__icon" src={viewsIcon} alt="eye icon" />
            <span className="vid-info__subtitle vid-info__subtitle--w-icon">
              {loadedVideo.views}
            </span>
          </div>
          <div className="vid-info__count-container vid-info__details-item">
            <img className="vid-info__icon" src={likesIcon} alt="heart icon" />
            <span className="vid-info__subtitle vid-info__subtitle--w-icon">
              {loadedVideo.likes}
            </span>
          </div>
        </article>
      </div>
      <div className="divide-line"></div>
      <p className="vid-info__description">{loadedVideo.description}</p>
      <p className="vid-info__comment-count">
        {loadedVideo.comments.length} Comments
      </p>
    </section>
  );
};

export default VideoInfo;
