import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import { profileReducer } from './profile/reducer';
import { chatsReducer } from './chats/reducer';
import { messagesReducer } from './chats/messages/reducer';

const composeExtenders = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers ({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagesReducer,
});

const persistConfig = {
  key: 'myMessenger',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer,
  composeExtenders(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);