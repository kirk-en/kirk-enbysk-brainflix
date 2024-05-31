import "./VideoList.scss";
import VideoListItem from "../VideoListItem/VideoListItem";

const VideoList = ({ videosData, setVideo }) => {


  return (
    <>
    <aside className="video-list">
      <h2 className="video-list__title">next videos</h2>
        <ul className="video-list__list">
          {videosData.map((video) => {
            return <VideoListItem
            video = {video}
            setVideo = {setVideo}
            key = {video.id}
            />
          })}
        </ul>
    </aside>
    </>
  );
};

export default VideoList;
