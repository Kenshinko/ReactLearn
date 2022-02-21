export const ADD_MESSAGE = 'MESSAGES:ADD_MESSAGE';
export const DELETE_MESSAGES = 'MESSAGES:DELETE_MESSAGES';


export const addMessage = (chatId, newMess) => ({
  type: ADD_MESSAGE,
  payload: {chatId, newMess},
});