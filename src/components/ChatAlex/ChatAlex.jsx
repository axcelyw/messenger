import React, { useState } from 'react' 
import './ChatAlex.scss'
import Icon from '../../assets/icon/Icon'
import alex from '../../assets/images/alex.png'
import ChatEva from '../ChatEva/ChatEva'
import ChatSend from '../ChatSend/ChatSend'
import ChatSends from '../ChatSends/ChatSends'
import ChatModal from '../ChatModal/ChatModal'




const ChatAlex = ({ message, setMessage }) => {
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
   
   const addMessage = (e) => { 

    setValue(e.target.value);

    const newMsg = {
      msg: 1,
      id:  Math.random().toString(36).substring(2, 9),
      msgs: value,
      time: `${new Date().getHours()}:${new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()}`
    }
     
    setMessage([...message, newMsg]);
    setValue('');
   }
  
  return ( 
   <><div className='chat'>
      <header className='header'>
        <img className='header__image' src={alex} alt="alex" />
         <div className="haeder__list">
          <h3 className='header__title'>Александр</h3>
          <p className="header__online">Онлайн</p>
        </div> 
      </header>
      
      <main className='main'>
      {
        message.map(item => item.msg === 1 ? 
        <ChatSend 
        key={item.id}
        message={item}
        />  : 
        <ChatSends 
        key={item.id}
        message={item}/>) 
        }
    
      </main>
      
      <footer className='footer__content'>
        <input type="text"onChange={onChangeSend} value={value} placeholder='Написать сообщение...' className='input'/>
         { value ? 
            <button onClick={addMessage} className='button'>
              <Icon id='send' />
            </button>
              :
            <button onClick={handleOpenCamera} className='button'>
              <Icon id='camera' />
            </button>
          }
          </footer>
          </div>
          <ChatModal
          message={message}
          setMessage={setMessage}
          openCamera={openCamera}
          close={handleCloseCamera}
          handleCloseCamera={handleOpenCamera}
          msg={1}
        />
   </> 
  )
}

export default ChatAlex
