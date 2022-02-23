import { FETCH_STATUSES } from "../../utils/variables";
import { GET_ANIMEFACTS_FAILURE, GET_ANIMEFACTS_REQUEST, GET_ANIMEFACTS_SUCCESS, } from "./actions";

const initialState = {
  data: [],
  error: null,
  status: FETCH_STATUSES.IDLE,
};

export const animeFactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ANIMEFACTS_REQUEST: {
      return {
        ...state,
        error: null,
        status: FETCH_STATUSES.REQUEST,
      };
    }
    case GET_ANIMEFACTS_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        status: FETCH_STATUSES.SUCCESS,
      };
    }
    case GET_ANIMEFACTS_FAILURE: {
      return {
        ...state,
        status: FETCH_STATUSES.FAILURE,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};