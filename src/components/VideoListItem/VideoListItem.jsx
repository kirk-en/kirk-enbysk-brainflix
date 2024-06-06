import "./VideoListItem.scss";

const VideoListItem = ({ vItem, setVideo }) => {
  // build link handler here
  const clickHandler = (e, vItem) => {
    // console.log(vItem);
    console.log(vItem.id)
    setVideo(vItem.id);
  }
  return (
    <li className="list-item" onClick={(e) => clickHandler(e, vItem)}>
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
  );
};
export default VideoListItem;
