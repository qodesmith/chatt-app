import React from 'react'

const Message = ({ id, item }) => {
  const me = id === item.id

  return (
    <div className={`mb2 w-max-90 ${me ? 'tr mla' : 'tl mra'}`}>
      <span className={`message dib relative ph3 pv2 ${me ? 'bg-silver' : 'bg-skyblue'}`}>
        {item.message}
      </span>
    </div>
  )
}

export default Message
