import { Link, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';

import { Form } from '../Form';

import { selectChats } from '../../store/chats/selector';
import { addChat, deleteChat } from '../../store/chats/actions';


import './chatslist.css';

export const ChatsList = () => {
  const chats = useSelector(selectChats);
  const dispatch = useDispatch();

  // Добавляем новый чат в стор.
  const handleAddChat = (newChatName) => {
    const newId = `chat${Date.now()}`;
    dispatch(addChat(newId, newChatName));
  };

  // Удаляем чат из стора.
  const handleDeleteChat = (id) => {
    dispatch(deleteChat(id));
  };

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
                <div onClick={() => handleDeleteChat(chat.id)}>&nbsp;X</div>
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