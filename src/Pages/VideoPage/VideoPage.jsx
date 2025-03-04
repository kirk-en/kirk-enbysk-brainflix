import "./VideoPage.scss";
import { useEffect, useState } from "react";

import Video from "../../components/Video/Video";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import VideoList from "../../components/VideoList/VideoList";
import CommentsContainer from "../../components/CommentsContainer/CommentsContainer";
import axios from "axios";
import { useParams } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const VideoPage = () => {

  const { videoId } = useParams();
  
  const [loadedVideo, setLoadedVideo] = useState();

  const getLoadedVideoData = async () => {
    try {
      const response = await axios.get(
        `${API}/videos/${
          videoId ? videoId : `84e96018-4022-434e-80bf-000ce4cd12b8`
        }?api_key=kirk100`
      );
      setLoadedVideo(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getLoadedVideoData();
  }, [videoId]);

  if (!loadedVideo) {
    return <p>loading...</p>;
  }

  return (
    <main>
      <Video loadedVideo={loadedVideo} API={API} />
      <div className="desktop-flex">
        <div className="desktop-flex__left">
          <VideoInfo loadedVideo={loadedVideo} />
          <CommentsContainer loadedVideo={loadedVideo} />
        </div>
        <div className="desktop-flex__right">
          <VideoList loadedVideoId={loadedVideo.id} API={API} />
        </div>
      </div>
    </main>
  );
};

export default VideoPage;
