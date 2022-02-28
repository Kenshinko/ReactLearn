import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { remove, set } from "@firebase/database";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';

import { Form } from '../Form';

import { selectChats } from '../../store/chats/selector';
import { initChatsTracking } from '../../store/chats/actions';
import { getChatsRefById, getMessagesRefByChatId } from "../../services/firebase";

import './chatslist.css';

export const ChatsList = () => {
  const chats = useSelector(selectChats);
  const dispatch = useDispatch();

  const handleAddChat = (newChatName) => {
    const newId = `chat${Date.now()}`;
    set(getChatsRefById(newId), { id: newId, name: newChatName });
    set(getMessagesRefByChatId(newId), { empty: true });
  };

  const handleDeleteChat = (id) => {
    remove(getChatsRefById(id));
  };

  useEffect(() => {
    dispatch(initChatsTracking());
  }, []);

  return (
  <>
    <div className='chats-ui'>
      <div className='timeline-mini'>
        <List className='chatslist'>
          {chats.map((chat) => (
            <ListItem
              key={chat.id}
              disableGutters
              secondaryAction={
                <Link to={`/chats/${chat.id}`}>
                  <IconButton>
                    <CommentIcon />
                  </IconButton>
                </Link>
              }
            >
              <Link to={`/chats/${chat.id}`}>
                <ListItemText primary={`${chat.name}`} />
                <div className='closebtn' onClick={() => handleDeleteChat(chat.id)}>X</div>
              </Link>
            </ListItem>
          ))}
        </List>
        <Form onSubmit={handleAddChat} />
      </div>
      <Outlet />
    </div>
  </>
)};