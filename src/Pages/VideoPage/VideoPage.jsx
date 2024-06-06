import "./VideoPage.scss";
import { useEffect, useState } from "react";
import videosData from "../../data/video-details.json";

import Video from "../../components/Video/Video";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import VideoList from "../../components/VideoList/VideoList";
import CommentsContainer from "../../components/CommentsContainer/CommentsContainer";
import axios from "axios";
import { useParams } from "react-router-dom";



const VideoPage = () => {
  
  const { videoId } = useParams();
  
  const [loadedVideo, setLoadedVideo] = useState({});


  const getLoadedVideoData = async () => {
    const response = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoId ? videoId : `84e96018-4022-434e-80bf-000ce4cd12b8`}?api_key=kirk100`);
    console.log('video changed to ' + response.data.title);
    setLoadedVideo(response.data);
  }

  useEffect (() => {
    getLoadedVideoData()
  }, [videoId])


  return (
    <>
    <Video loadedVideo={loadedVideo} />
      <div className="desktop-flex">
        <div className="desktop-flex__left">
          {/* {loadedVideo !== {} && <VideoInfo loadedVideo={loadedVideo} />} */}
          {/* <CommentsContainer loadedVideo={loadedVideo} /> */}
        </div>
        <div className="desktop-flex__right">
          <VideoList
            
            loadedVideoId={loadedVideo.id}
          />
        </div>
      </div>
    </>
  );
};

export default VideoPage;
