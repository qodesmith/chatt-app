import React from 'react'

const Message = ({ id, item }) => {
  const me = id === item.id

  return (
    <div className={`mb2 ${me ? 'tr' : 'tl'}`}>
      <span className={`message dib relative ph3 pv2 ${me ? 'bg-silver' : 'bg-skyblue'}`}>
        {item.message}
      </span>
    </div>
  )
}

export default Message
