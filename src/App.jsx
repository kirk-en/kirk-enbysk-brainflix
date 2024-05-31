import { useState } from "react";
import "./App.scss";
import videosData from "./data/video-details.json";

import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import VideoInfo from "./components/VideoInfo/VideoInfo";
import VideoList from "./components/VideoList/VideoList";
import CommentsContainer from "./components/CommentsContainer/CommentsContainer";

console.log(videosData);

function App() {
  const [video, setVideo] = useState(videosData[0]);

  return (
    <>
      <Header />
      <Video video = {video} />
      <VideoInfo video = {video} />
      < CommentsContainer video = {video}/>
      <VideoList videosData = {videosData} setVideo = {setVideo} />
    </>
  );
}

export default App;
