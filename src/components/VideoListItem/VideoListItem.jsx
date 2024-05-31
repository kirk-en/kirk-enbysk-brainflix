import "./VideoListItem.scss";

const VideoListItem = ({ video, setVideo }) => {
  // build link handler here
  const clickHandler = (e, video) => {
    console.log(video);
    setVideo(video);
  }
  return (
    <li className="list-item" onClick={(e) => clickHandler(e, video)}>
      <img
        className="list-item__img"
        src={video.image}
        alt={`Thumbnail image for a video titled ${video.title} that was uploaded on ${new Date(video.timestamp).toLocaleDateString()}`}
      />
      <article className="list-item__info">
        <p className="list-item__title">{video.title}</p>
        <p className="list-item__channel">{video.channel}</p>
      </article>
    </li>
  );
};
export default VideoListItem;
