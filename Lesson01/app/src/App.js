import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import { Message } from './components/Message';
import { Form } from './components/Form';

function App() {
  const [messageList, setMessageList] = useState([]);

  const handleAddMessage = ({text, author, date}) => {
    setMessageList((prevMessageList) => [...prevMessageList, {text, author, date}]);
    console.log(messageList);
  }

  const getBotResponse = () => {
    if (messageList[messageList.length - 1].author === 'user') {
      setMessageList((prevMessageList) => [...prevMessageList, {text: 'Привет, я бот! Я мог бы быть лучше, если бы мой создатель не поленился. :(', author: 'bot', date: new Date().toLocaleTimeString()}]);
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
          {messageList.map(({text, author, date}) => (
            <Message text={text} author={author} date={date} />
          ))}
          <Form onSubmit={handleAddMessage} onClick={getBotResponse}/>
        </div>
      </header>
    </div>
  );
}

export default App;
