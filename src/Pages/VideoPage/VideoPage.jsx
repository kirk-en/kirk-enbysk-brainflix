import "./VideoPage.scss";
import { useState } from "react";
import videosData from "./data/video-details.json";

import Video from "./components/Video/Video";
import VideoInfo from "./components/VideoInfo/VideoInfo";
import VideoList from "./components/VideoList/VideoList";
import CommentsContainer from "./components/CommentsContainer/CommentsContainer";


const VideoPage = () => {
  return (
    <>
      <Video video={video} />
      <div className="desktop-flex">
        <div className="desktop-flex__left">
          <VideoInfo video={video} />
          <CommentsContainer video={video} />
        </div>
        <div className="desktop-flex__right">
          <VideoList
            videosData={videosData}
            setVideo={setVideo}
            currentVideoId={video.id}
          />
        </div>
      </div>
    </>
  );
};

export default VideoPage;
