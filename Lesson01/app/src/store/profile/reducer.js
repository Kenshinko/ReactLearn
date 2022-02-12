import { CHANGE_COLOR, CHANGE_SHOW_NAME } from './actions';

const initialState = {
  name: 'Default',
  showName: false,
  color: 'white',
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SHOW_NAME: {
      return {
        ...state,
        showName: !state.showName,
      };
    }
    case CHANGE_COLOR: {
      return {
        ...state,
        color: action.payload,
      };
    }
    default:
      return state;
  }
};