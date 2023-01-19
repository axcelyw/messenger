import React, {useState} from 'react';
import './App.scss';
import ChatAlex from './components/ChatAlex/ChatAlex';
import ChatEva from './components/ChatEva/ChatEva';
import ChatModal from './components/ChatModal/ChatModal';
import './components/ChatModal/ChatModal.scss';
import ChatSend from './components/ChatSend/ChatSend';


function App ({setOpenCamera}) {
  const [modal, setModal] = useState(false)
  const [message, setMessage] = useState([])


  const handleOpenCamera = () => {
    setOpenCamera(true);
    setModal(!modal);
  } 

  return (
   <>
   <div className='App'>    
      <div className='container'> 
        <div className='allchat'>
         <ChatAlex
         handleOpenCamera = {handleOpenCamera}
         message={message}
         setMessage={setMessage} 
         />
          <ChatEva
        handleOpenCamera = {handleOpenCamera} 
        message={message}
        setMessage={setMessage}
        />   
        </div>
      </div>
    </div>
   </> 
  );
}

export default App;
