import React, { useEffect, useState } from 'react';
import { MessageList } from './components/MessageList';
import { Form } from './components/Form';
import { ChatsList } from './components/ChatsList';
import { Authors } from './utils/variables';
import { BotResponses } from './utils/variables';
import './App.css';

// import ReactDOM from 'react-dom';
// import Button from '@mui/material/Button';

function App() {
  const [messageList, setMessageList] = useState([]);
  
  const handleAddMessage = (text) => {
    sendMessage (text);
  }

  const sendMessage = (text) => {
    const newMessage = {
      id: `Msg${Date.now()}`,
      author: Authors.user.name,
      text,
      date: new Date().toLocaleTimeString(),
    };
    setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
    getBotResponse();
  }

  const getBotResponse = () => {
    if (messageList[messageList.length - 1]?.author === Authors.user.name) {
      setMessageList((prevMessageList) => [...prevMessageList, {
        id: `Msg${Date.now()}`,
        author: Authors.bot.name,
        text: BotResponses[Math.floor(Math.random() * BotResponses.length)],
        date: new Date().toLocaleTimeString(),
      }]);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      getBotResponse()
    }, 1000);
    return () => clearTimeout(timer);
    }, [messageList, getBotResponse])

  return (
    <div className="App">
      <header className="App-header">
        <div className="timeline">
          <MessageList messages={messageList} />
          <Form onSubmit={handleAddMessage} />
          <ChatsList />
        </div>
      </header>
    </div>
  );
}

export default App;
