import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import io from 'socket.io-client';

import onlineIcon from '../../icons/on.png';

import './TextContainer.css';
function TextContainer({ users }){

return(
      <div className="textContainer">
    <div>
      <h1>Realtime Chat Application <span role="img" aria-label="emoji">💬</span></h1>
      <h2>Created with React, Express, Node and Socket.IO <span role="img" aria-label="emoji">❤️</span></h2>
      <h2>Try it out right now! <span role="img" aria-label="emoji">⬅️</span></h2>
    </div>
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name,room,id}) => (
                  <div key={name} className="activeItem"><li ><Link to={`/privatechat?receive=${name}&room=${room}`}> {name}</Link></li>
                  
                    <img alt="Online Icon" src={onlineIcon}/>
                 
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
  )}

export default TextContainer;