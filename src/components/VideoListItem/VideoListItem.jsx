import "./VideoListItem.scss";
import { Link } from "react-router-dom";

const VideoListItem = ({ vItem, API }) => {
  return (
    <Link to={`/videos/${vItem.id}`} className="link">
      <li className="list-item">
        <img
          className="list-item__img"
          src={`${API}${vItem.image}`}
          alt={`Thumbnail for a video titled ${
            vItem.title
          } that was uploaded on ${new Date(
            vItem.timestamp
          ).toLocaleDateString()}`}
        />
        <article className="list-item__info">
          <p className="list-item__title list-item__title--bold">
            {vItem.title}
          </p>
          <p className="list-item__title">{vItem.channel}</p>
        </article>
      </li>
    </Link>
  );
};
export default VideoListItem;
