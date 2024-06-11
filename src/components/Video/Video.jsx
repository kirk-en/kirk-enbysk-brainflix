import "./Video.scss";

const Video = ({ loadedVideo, API }) => {
  return (
    <>
      <video
        controls
        src={`${API}${loadedVideo.video}`}
        poster={`${API}${loadedVideo.image}`}
        className="video"
      ></video>
    </>
  );
};

export default Video;
