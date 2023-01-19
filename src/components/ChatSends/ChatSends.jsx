import React from 'react'
import './ChatSends.scss'

const ChatSends = ({ message }) => {
    return (
   <div className="sends">
    { message.img ? 
    <div className="imgs__item">
      <div className='imgs__content'>
        <img src={message.url} alt=''/>
        <p>{message.message}</p>
      </div>
      <span className="imgs__time">{message.time}</span>
    </div> :
        <div className="sends__item">
          <div className='sends__content'>
            <p>{message.msgs}</p>
         </div>
         <span className="sends__time">{message.time}</span>
       </div>}
     </div>
    )
  }
  export default ChatSends