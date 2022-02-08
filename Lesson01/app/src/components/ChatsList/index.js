import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import { Link, Outlet } from 'react-router-dom';

import './chatslist.css';

const chats = [
  {name: 'Chat1', id: 'chat1'},
  {name: 'Chat2', id: 'chat2'},
];

export const ChatsList = () => (
  <>
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
          </Link>
        </ListItem>
      ))}
    </List>
    <Outlet />
  </>
);