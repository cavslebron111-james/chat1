import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import './join.css';

function join() {
    const [name,setname] = useState('');
    const [room,setroom] = useState('Help-Center');
   
   
   
    return (
        <div className="joinOutercontainer">
        <div className="joinInnercontainer">
        <h1 className="heading">Chat With Our Help Center</h1>
        <div><input placeholder="Type Your Name" className="joininput" type="text" onChange={(event)=>setname(event.target.value)} /></div>
        <div><input placeholder="room" className="joininput mt-20" type="text" value = {room} /></div>
        
        
        <Link onClick={event =>(!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
       <button className="button mt-20" type='submit'>join</button>
        
       </Link>
        </div>
            
        </div>
    )
}

export default join
