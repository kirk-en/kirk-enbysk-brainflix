import "./VideoList.scss";
import VideoListItem from "../VideoListItem/VideoListItem";

const VideoList = ({ videosData, setVideo, currentVideoId }) => {
  return (
    <>
      <aside className="video-list">
        <h2 className="video-list__title">next videos</h2>
        <ul className="video-list__list">
          {videosData.map((vItem) => {
            return (
              !(vItem.id == currentVideoId) && (
                <VideoListItem
                  vItem={vItem}
                  setVideo={setVideo}
                  key={vItem.id}
                />
              )
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default VideoList;
