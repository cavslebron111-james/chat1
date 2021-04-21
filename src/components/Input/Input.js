import React,{useState,useEffect} from 'react';
import Picker from 'emoji-picker-react';
import emo from '../../icons/emoji.png'




 

import './Input.css';

const ENDPOINT = "localhost:5000";

const Input = ({ setmessage, sendMessage, message,settype }) => {
  const [chosenEmoji, setChosenEmoji] = useState('');

  const[visible,setvisible] = useState(false)
  const [msgvalue,setmsgvalue] = useState('')

 


  const showModal = (event) => {
   event.preventDefault();
   if(!visible){
   setvisible(true)
   
   } else {
     
    setvisible(false)
   }

  };

  
 
 
    const onEmojiClick = (event, emojiObject) => {
        
        setChosenEmoji(emojiObject);
        setmessage(message += emojiObject.emoji);
    }

    const onmsgvalueChange=(event)=>{
     
      setmessage(event.currentTarget.value);
      setvisible(false)
      
      
      
     
    
  }
    


 return(
 <div>
  <form className="form">
  <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
     
      onChange={({target: {value}})=>setmessage(value) }
     onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button onClick={event => showModal(event)}> <img style={{height:'40px'}} src={emo} alt="emoji" /></button>
     <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
    </form>
   
         { visible ?  
            <Picker onEmojiClick={onEmojiClick}/>:null}
   
        </div>
    
    
     
  
 )
  }

export default Input;