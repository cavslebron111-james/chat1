import React,{useEffect,useState} from 'react'
import io from 'socket.io-client';
import queryString from 'query-string';
import TextContainer from '../TextContainer/TextContainer';

import './privatechat.css';
import InfoBar from '../infobar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';

let socket;
function privatechat({location}) {
    const [name,setname] = useState('');
     const [room,setroom] = useState('');
     const [id,setId] = useState('');
    const [users, setUsers] = useState('');
    const [message,setmessage]=useState('');
    const [messages,setmessages]=useState([]);
     const [typing1,settyping1]=useState('');
     const [receive,setreceive]=useState('')
    

  
    const ENDPOINT = "localhost:5000";
    useEffect(()=>{
        const {receive,room,id} = queryString.parse(location.search)
           
         socket = io(ENDPOINT);
        
        setname('ruel');
        setroom(room);
        setId(id);
        setreceive(receive)
        
        console.log('privatechat.js socket',socket)
        setUsers(users);

        console.log('id upon mount',id)
        
       
           return ()=>{
               socket.emit('join',{name,room},()=>{

         }); socket.emit('diconnect');
               socket.off();
           }
        
    },[ENDPOINT,location.search]);

     useEffect(()=>{
          socket.on('privateMessage',function({data}){
            // setmessages(messages => [ ...messages, data.message ]);
            //console.log('all messages',messages);
            alert('heyehey')
        //  settyping1('');
         });
        //  socket.on("roomData", ({ users }) => {
        //     setUsers(users);
        //   });
          // socket.on('typeState',function({name,room,id}){
          //   settyping1(name + ' is typing a message');
          // })

       
        
    
         
     },[]);
      //  const settype = (event)=>{
      //   socket.emit('typeState',({name,room}))
      // }
      
      const sendMessage = (event)=>{
        event.preventDefault();
          
        if(message){
             socket.emit('privateMessage',({receive,message}))
             
             console.log('themessageis',message);
             console.log('malenasid ay',id);
             console.log('name ay',name);
        }
        // socket.on('privateMessage',function(data){
        //   // var name = data.name;
        //   // var message = data.message;
        //   // console.log('result data is',data)
        //   alert('hey men');
        //   }); 
       
    
      }
     
      // const sendMessage = (event)=>{
      //   event.preventDefault();
          
      //   if(message){
      //        socket.emit('privateMessage',({to:name,message:message}),()=> setmessage(''));
      //        console.log('themessageis',message);
      //        console.log('malenasid ay',id);
      //        console.log('name ay',name);
      //   }
      // }
           
      

     
 
 
     console.log('messagehereisprivatechat',message)
  console.log('name',name)
  console.log('ids ay',id)
  

    return (
        <div className="outerContainer">
        <div className="container">
         <InfoBar room={room}/>
         <Messages messages={messages} name={name} />
         <p style={{alignSelf:'center',fontSize:'24px',fontStyle:'italic'}}>{typing1}</p>
        
       
        <Input message={message} setmessage={setmessage} sendMessage={sendMessage}  />
        </div>
        
            
        </div>
    )
}

export default privatechat
