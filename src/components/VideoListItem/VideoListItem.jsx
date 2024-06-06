import "./VideoListItem.scss";
import { Link } from "react-router-dom";

const VideoListItem = ({ vItem, setLoadedVideo }) => {
  const clickHandler = (e, vItem) => {
    // console.log(vItem);
    console.log(vItem.id)
    setLoadedVideo(vItem);
  }
  return (
    <Link to={`/${vItem.id}`}>
      <li className="list-item">
        <img
          className="list-item__img"
          src={vItem.image}
          alt={`Thumbnail image for a video titled ${vItem.title} that was uploaded on ${new Date(vItem.timestamp).toLocaleDateString()}`}
        />
        <article className="list-item__info">
          <p className="list-item__title">{vItem.title}</p>
          <p className="list-item__channel">{vItem.channel}</p>
        </article>
      </li>
    </Link>
  );
};
export default VideoListItem;
