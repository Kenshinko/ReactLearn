import React, { useEffect, useState } from 'react';
import { MessageList } from '../MessageList';
import { Form } from '../Form';
import { Navigate, useParams } from "react-router";

import { Authors } from '../../utils/variables';
import { BotResponses } from '../../utils/variables';

import '../../App.css';

export const Chat = () => {
  const params = useParams();
  const {chatId} = params;

  const [messageList, setMessageList] = useState({
    chat1: [],
    chat2: [],
  });
  
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
    setMessageList((prevMessageList) => ({
      ...prevMessageList,
      [chatId]: [...prevMessageList[chatId], newMessage],
    }));
    getBotResponse();
  }

  const getBotResponse = () => {
    if (messageList[chatId]?.[messageList[chatId].length - 1]?.author === Authors.user.name) {
      setMessageList((prevMessageList) => ({
        ...prevMessageList,
        [chatId]: [...prevMessageList[chatId],  {
          id: `Msg${Date.now()}`,
          author: Authors.bot.name,
          text: BotResponses[Math.floor(Math.random() * BotResponses.length)],
          date: new Date().toLocaleTimeString(),
        }]
      }));
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      getBotResponse()
    }, 1000);
    return () => clearTimeout(timer);
    }, [messageList, getBotResponse])

  if (!messageList[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="timeline">
          <MessageList messages={messageList[chatId]} />
          <Form onSubmit={handleAddMessage} />
        </div>
      </header>
    </div>
  );
};