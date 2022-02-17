import React, { useEffect } from 'react';
import { Navigate, useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';

import { MessageList } from '../MessageList';
import { Form } from '../Form';

import { Authors } from '../../utils/variables';
import { BotResponses } from '../../utils/variables';
import { selectMessages } from '../../store/chats/messages/selector';
import { addMessage } from '../../store/chats/messages/actions';

import '../../App.css';

export const Chat = () => {
  const params = useParams();
  const {chatId} = params;

  const messages = useSelector(selectMessages);
  const dispatch = useDispatch();

  const handleAddMessage = (text) => {
    sendMessage (text);
  };

  const sendMessage = (text) => {
    const newMess = {
      id: `Msg${Date.now()}`,
      author: Authors.user.name,
      text,
      date: new Date().toLocaleTimeString(),
    };
    dispatch(addMessage(chatId, newMess));
    getBotResponse();
  };

  const getBotResponse = () => {
    const item = messages[chatId];
    if (item.length > 0 && item[item.length - 1].author === Authors.user.name)
     {
      const newMess = {
          id: `Msg${Date.now()}`,
          author: Authors.bot.name,
          text: BotResponses[Math.floor(Math.random() * BotResponses.length)],
          date: new Date().toLocaleTimeString(),
        };
      dispatch(addMessage(chatId, newMess));
      }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getBotResponse()
    }, 1000);
    return () => clearTimeout(timer);
    }, [messages, getBotResponse])

  if (!messages[chatId]) {
    return <Navigate to="/chats" replace />;
  };

  return (

        <div className="timeline">
          <MessageList messages={messages[chatId]} />
          <Form onSubmit={handleAddMessage} />
        </div>

  );
};