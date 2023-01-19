import React, { useState } from 'react' 
import './ChatEva.scss'
import Icon from '../../assets/icon/Icon' 
import eva from '../../assets/images/eva.png'
import ChatSend from '../ChatSend/ChatSend'
import ChatModal from '../ChatModal/ChatModal'
import ChatSends from '../ChatSends/ChatSends'



const ChatEva = ({ message, setMessage }) => {
  
  const [value, setValue] = useState('')
  const [openCamera, setOpenCamera] = useState(false);

  const handleOpenCamera = () => {
    setOpenCamera(true);
    
  }

  const handleCloseCamera = () => {
    setOpenCamera(false);
  }
  

  const onChangeSend = (e) => {
    setValue(e.target.value);
   }
   
   const addMessages = (e) => { 

    setValue(e.target.value);

    const newMsg = {
      msg: 2,
      id:  Math.random().toString(36).substring(2, 9),
      msgs: value,
      time: `${new Date().getHours()}:${new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()}`
    }
     
    setMessage([...message, newMsg]);
    setValue('');
    
   }

  return (
   <>
   <div className='chats'>
      <header className='headers'>
        <img className='headers__images' src={eva} alt="eva" />
        <div className="haeders__lists">
          <h3 className='headers__titles'>Евгений</h3>
        <p className="headers__onlines">Онлайн</p>
        </div>  
    </header>
    <main className='mains'>
      {
      message.map(item => item.msg === 2 ? 
        <ChatSend 
        key={item.id}
        message={item}/> :
        <ChatSends
        key={item.id}
        message={item}
        />)   
}

    </main>
    
        <div className='footers__contents'>
        <input type="text"onChange={onChangeSend} value={value} placeholder='Написать сообщение...' className='inputs'/>
         { value ? 
            <button onClick={addMessages} className='buttons'>
              <Icon id='send' />
            </button>
              :
            <button onClick={handleOpenCamera} className='buttons'>
              <Icon id='camera' />
            </button>
          }
            </div>
        </div>
        <ChatModal
         message={message}
         setMessage={setMessage}
         openCamera={openCamera}
         close={handleCloseCamera}
         handleCloseCamera={handleOpenCamera}
         msg={2}
        />
   </> 
  )
}

export default ChatEva
