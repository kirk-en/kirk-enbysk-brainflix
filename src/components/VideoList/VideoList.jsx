import "./VideoList.scss";
import VideoListItem from "../VideoListItem/VideoListItem";

const VideoList = ({ videosData, setVideo }) => {
  // build link handler here

  return (
    <>
      <ul>
        {videosData.map((video) => {
          return <VideoListItem
          video = {video}
          setVideo = {setVideo}
          />
        })}
      </ul>
    </>
  );
};

export default VideoList;
