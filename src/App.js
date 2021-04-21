import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import join from './components/join/join';
import chat from './components/chat/chat';
import privatechat from './components/privatechat/privatechat';


const App = ()=>(
    <Router>
    <Route path = "/" exact component={join} />
    <Route path = "/chat" exact component={chat} />
    <Route path = "/privatechat" exact component={privatechat} />
    

    

    
    
    
    </Router>
)

export default App;