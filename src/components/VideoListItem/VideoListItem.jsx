import './VideoListItem.scss'

const VideoListItem = ({video, setVideo}) => {

  return (
    <li className='list-item'>
      <img className='list-item__img' src={video.image} alt="next video thumbnail image" />
      <article className='list-item__info'>
        <p className='list-item__title'>{video.title}</p>
        <p className='list-item__channel'>{video.channel}</p>
      </article>
    </li>
  )
}
export default VideoListItem;