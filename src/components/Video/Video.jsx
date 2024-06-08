import "./Video.scss";

const Video = ({ loadedVideo }) => {
  return (
    <>
      <video
        controls
        src={`${loadedVideo.video}?api_key=newKey`}
        poster={loadedVideo.image}
        className="video"
      ></video>
    </>
  );
};

export default Video;
