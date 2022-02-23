import React from 'react';
import { Navigate, useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';

import { MessageList } from '../MessageList';
import { Form } from '../Form';

import { Authors } from '../../utils/variables';
import { selectMessages } from '../../store/chats/messages/selector';
import { addMessageViaThunk } from '../../store/chats/messages/actions';

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
    dispatch(addMessageViaThunk(chatId, newMess));
  };

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