// import poster from '../../assets/images/Upload-video-preview.jpg'
import './Video.scss'

const Video = ({video}) => {
  return (
    <>
      <video controls src={video.video} poster={video.image} className='video'></video>
    </>
  );
};

export default Video;