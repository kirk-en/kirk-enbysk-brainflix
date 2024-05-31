import './CommentsContainer.scss'
import CommentsField from '../CommentsField/CommentsField';
import CommentsList from '../CommentsList/CommentsList';

const CommentsContainer = ({ video }) => {

  return (
<>
<CommentsField />
<CommentsList video = {video}/>
</>

  )
}

export default CommentsContainer;