import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from "react-router";
import { onChildAdded, onValue, set } from "@firebase/database";

import { MessageList } from '../MessageList';
import { Form } from '../Form';

import { Authors } from '../../utils/variables';
import { getMessageListRefByChatId, getMessageRefById, getMessagesRefByChatId } from "../../services/firebase";

import '../../App.css';

export const Chat = () => {
  const params = useParams();
  const {chatId} = params;
  const [messages, setMessages] = useState([]);

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
    set(getMessageRefById(chatId, newMess.id), newMess);
  };

  useEffect(() => {
    const unsubscribe = onValue(getMessagesRefByChatId(chatId), (snapshot) => {
      if (!snapshot.val()?.empty) {
        setMessages(null);
      }
    });

    return unsubscribe;
  }, [chatId]);

  useEffect(() => {
    const unsubscribe = onChildAdded(
      getMessageListRefByChatId(chatId),
      (snapshot) => {
        setMessages((prevMessages) => [...prevMessages, snapshot.val()]);
      }
    );

    return unsubscribe;
  }, [chatId]);

  if (!messages) {
    return <Navigate to="/chats" replace />;
  };

  return (
        <div className="timeline">
          <MessageList messages={messages} />
          <Form onSubmit={handleAddMessage} />
        </div>
  );
};