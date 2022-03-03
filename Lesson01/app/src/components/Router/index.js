import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import { Profile } from '../Profile';
import { Chat } from '../Chat';
import { ChatsList } from '../ChatsList';
import { AnimeFacts } from '../AnimeFacts';
import { RoutePublic } from '../RoutePublic/RoutePublic';
import { RoutePrivate } from '../RoutePrivate/RoutePrivate';
import { Authorization } from '../Authorization';

import { auth } from '../../services/firebase';

import './router.css';

export const Router = () => {
  const [authed, setAuthed] = useState(false);

  const unauthorize = () => {
    setAuthed(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthed(true);
      } else {
        setAuthed(false);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <ul className='navigation'>
          <li>
            { authed ? <Link to='/profile'>Profile</Link> : <Link to='/'>Home</Link> }
          </li>
          <li>
            <Link to='/chats'>Chats</Link>
          </li>
          <li>
            <Link to='/animefacts'>Anime Facts API</Link>
          </li>
        </ul>

          <Routes>

            <Route path='/' element={<RoutePublic authed={authed} />}>
              <Route path='' element={<Authorization />}/>
              <Route path="/signup" element={<Authorization isSignUp />} />
            </Route>

            <Route path='/profile' element={<RoutePrivate authed={authed} />}>
              <Route path='' element={<Profile onLogout={unauthorize} />} />
            </Route>

            <Route path='/animefacts' element={<AnimeFacts />}/>
            <Route path='/chats' element={<ChatsList />}>
              <Route path=':chatId' element={<Chat />} />
            </Route>
            <Route path='*' element={<h1>404:<br/>Страница не найдена</h1>} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
};