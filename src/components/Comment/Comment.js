import React, { PropTypes } from 'react'
import TextWithHighlight from '../TextWithHighlight'
import './Comment.css'

class Comment extends React.PureComponent {
  render() {
    const { name, body, filterString } = this.props

    return (
      <div className="divComment">
        <div className="divName" >
          <TextWithHighlight text={name} highlightText={filterString} />
        </div>
        <div className="divBody">
          <TextWithHighlight text={body} highlightText={filterString} />
        </div>
      </div>
    )
  }
}
Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  filterString: PropTypes.string.isRequired,
}

export default Comment
