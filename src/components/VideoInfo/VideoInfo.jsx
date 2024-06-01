import "./VideoInfo.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";

const VideoInfo = ({video}) => {

  return (
    <section className="vid-info">
      <h1 className="vid-info__title">{video.title}</h1>
      <div className="divide-line"></div>
      <div className="vid-info__details">
        <article className="vid-info__details-group">
          <span className="vid-info__author">By {video.channel}</span>
          <span className="vid-info__subtitle">
            {new Date(video.timestamp).toLocaleDateString()}
          </span>
        </article>

        <article className="vid-info__details-group vid-info__details-group--right">
          <div className="vid-info__count-container">
            <img className="vid-info__icon" src={viewsIcon} alt="eye icon" />
            <span className="vid-info__subtitle">{video.views}</span>
          </div>
          <div className="vid-info__count-container">
            <img className="vid-info__icon" src={likesIcon} alt="heart icon" />
            <span className="vid-info__subtitle">{video.likes}</span>
          </div>
        </article>
      </div>
      <div className="divide-line"></div>
      <p>
        {video.description}
      </p>
      <p>{video.comments.length} Comments</p>
    </section>
  );
};

export default VideoInfo;
