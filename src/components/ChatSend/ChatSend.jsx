import React from 'react'
import './ChatSend.scss'




  const ChatSend = ({ message }) => {
  return (
     <div className="send">
  { message.img ? <div className="img__item">
    <span className="img__time">{message.time}</span>
      <div className='img__content '>
        <img src={message.url} alt='' />
        <p>{message.message}</p>
      </div>
    </div> :
        <div className="send__item">
          <span className="send__time">{message.time}</span>
          <div className='send__content'>
          <p>{message.msgs}</p>
         </div>
       </div>}
     </div>
  )
}
export default ChatSend