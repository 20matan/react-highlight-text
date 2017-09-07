import React, { PropTypes } from 'react'
import './CommentsList.css'
import Comment from '../Comment'

class CommentsList extends React.PureComponent {
  render() {
    const { filterString, comments } = this.props

    return (
      <ul className="listContainer">
        {comments.map(comment => (
          <li key={comment.id}>
            <Comment {...comment} filterString={filterString} />
          </li>
        ))}
      </ul>
    )
  }
}
CommentsList.propTypes = {
  comments: PropTypes.arrayOf({
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  filterString: PropTypes.string.isRequired,
}

export default CommentsList
