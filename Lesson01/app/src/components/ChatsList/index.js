import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import './chatslist.css';


const chats = [
  {name: 'Chat1', id: 'chat1'},
  {name: 'Chat2', id: 'chat2'},
];

export const ChatsList = () => (
  <List className='chatslist'>
    {chats.map((value) => (
      <ListItem
        key={value.id}
        disableGutters
        secondaryAction={
          <IconButton>
            <CommentIcon />
          </IconButton>
        }
      >
        <ListItemText primary={`${value.name}`} />
      </ListItem>
    ))}
  </List>
);