import "./VideoList.scss";
import VideoListItem from "../VideoListItem/VideoListItem";
import axios from "axios";

const VideoList = ({ videosData, setVideo, currentVideoId }) => {

  const getVideoList = async () => {
    const response = await axios(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=kirk100`);
    console.log(response.data)
    return response.data;
  }

  const videosArrFromApi = getVideoList();
  // console.log(videosArrFromApi);

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
