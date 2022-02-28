import { set } from 'firebase/database';

import { getMessageRefById } from '../../../services/firebase';
import { Authors, BotResponses } from '../../../utils/variables';

export const ADD_MESSAGE = 'MESSAGES:ADD_MESSAGE';
export const DELETE_MESSAGES = 'MESSAGES:DELETE_MESSAGES';

export const addMessage = (chatId, newMess) => ({
  type: ADD_MESSAGE,
  payload: {chatId, newMess},
});

let timeout;

export const addBotMessage = (chatId, newMess) => (dispatch) => {
  dispatch(addMessage(chatId, newMess));

  if (newMess.author !== Authors.bot.name) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      const newMessFromBot = {
        id: `Msg${Date.now()}`,
        author: Authors.bot.name,
        text: BotResponses[Math.floor(Math.random() * BotResponses.length)],
        date: new Date().toLocaleTimeString(),
      };
    // dispatch(addMessage(chatId, newMessFromBot));
    set(getMessageRefById(chatId, newMessFromBot.id), newMessFromBot);

    }, 1000);
  }
} 