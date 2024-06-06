import "./VideoList.scss";
import VideoListItem from "../VideoListItem/VideoListItem";
import axios from "axios";
import { useEffect, useState } from "react";

const VideoList = ({ setVideo, currentVideoId }) => {

  const [nextVideosList, setNextVideosList] = useState([]);


  const getVideoList = async () => {
    const response = await axios(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=kirk100`);
    console.log('This is from the api', response.data)
    setNextVideosList(response.data)
  }
useEffect(() => {
  getVideoList();
}, [])


  return (
    <>
      <aside className="video-list">
        <h2 className="video-list__title">next videos</h2>
        <ul className="video-list__list">
          {nextVideosList.map((vItem) => {
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
