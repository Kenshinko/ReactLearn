import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import { Profile } from '../Profile';
import { Chat } from '../Chat';
import { ChatsList } from '../ChatsList';
import { AnimeFacts } from '../AnimeFacts';


import './router.css';

export const Router = () => {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <ul className='navigation'>
          <li>
            <Link to=''>Profile</Link>
          </li>
          <li>
            <Link to='chats'>Chats</Link>
          </li>
          <li>
            <Link to='animefacts'>Anime Facts API</Link>
          </li>
        </ul>

          <Routes>
            <Route path='' element={<Profile />} />
            <Route path='chats' element={<ChatsList />}>
              <Route path=':chatId' element={<Chat />} />
            </Route>
            <Route path='animefacts' element={<AnimeFacts />}/>
            <Route path='*' element={<h1>404:<br/>Страница не найдена</h1>} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
};