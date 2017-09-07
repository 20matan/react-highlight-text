import React, { PropTypes } from 'react'

const TextWithHighlight = ({ text, highlightText }) => {
  if (!highlightText)
    return <span>{text}</span>

  const reg = new RegExp(`(${highlightText})`, 'g')
  return (<div>
    {text.split(reg).map((part, index) => {
      if (part === highlightText)
        return <span key={index} className="spanHighlight">{part}</span>
      return (<span key={index}>{part}</span>)
    })
    }
  </div>)
}
TextWithHighlight.propTypes = {
  text: PropTypes.string.isRequired,
  highlightText: PropTypes.string.isRequired,
}

export default TextWithHighlight
