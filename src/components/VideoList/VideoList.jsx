import "./VideoList.scss";
import VideoListItem from "../VideoListItem/VideoListItem";
import axios from "axios";
import { useEffect, useState } from "react";

const VideoList = ({ loadedVideoId, API }) => {

  const [nextVideosList, setNextVideosList] = useState([]);

  const getVideoList = async () => {
    try {
      const response = await axios(
        `${API}/videos?api_key=kirk100`
      );
      setNextVideosList(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getVideoList();
  }, []);

  return (
    <>
      <aside className="video-list">
        <h2 className="video-list__title">next videos</h2>
        <ul className="video-list__list">
          {nextVideosList.map((vItem) => {
            return (
              !(vItem.id == loadedVideoId) && (
                <VideoListItem vItem={vItem} key={vItem.id} API={API}/>
              )
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default VideoList;
