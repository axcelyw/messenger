import React, { useState } from 'react'
import './ChatModal.scss'


const ChatModal = ({ close, openCamera, message, setMessage, msg  }) => {
  const [urlValue, setUrlValue] = useState('');
    const [value, setValue] = useState('');

    const onChangeUrlValue = e => {
        setUrlValue(e.target.value);
    }

    const onChangeValue = e => {
        setValue(e.target.value);
    }

    const sendImgs = (e) => {
        e.preventDefault();

        if (value) {
            const newImg = {
                msg,
                id: Math.random().toString(36).substring(2, 9),
                img: true,
                url: urlValue,
                message: value,
                time: `${new Date().getHours()}:${new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()}`,
            }
    
            setMessage([...message, newImg]);
            setUrlValue('');
            setValue('');
    
            close();
        }
    }
  
  return (
    <div className={openCamera ? 'modal active' : 'modal'}>
      <div className="modal__wrapper">
        <h3 className="modal__title">Отправить картинку</h3>
        <form action="" className='modal__form'>
          <div className="group">
            <h6 className='group__description'>URL</h6>
            <input  placeholder='URL' type="text" 
            value={urlValue}
            onChange={onChangeUrlValue}/>
          </div>
          <div className="group">
            <h6 className='group__description'>Комментарий</h6>
            <input  placeholder='Комментарий' type="text" 
            value={value}
            onChange={onChangeValue}/>
          </div>
          <div className="group__btns">
            <button  onClick={close } className='group__btn'>ОТМЕНА</button>
            <button onClick={sendImgs} className='group__btn'>ОТПРАВИТЬ</button>
          </div>
        </form>
      </div>
    </div>
  )
}


export default ChatModal