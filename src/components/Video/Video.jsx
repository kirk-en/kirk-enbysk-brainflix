import poster from '../../assets/images/Upload-video-preview.jpg'
import './Video.scss'

const Video = () => {
  return (
    <>
      <video controls src="" poster={poster} className='video'></video>
    </>
  );
};

export default Video;