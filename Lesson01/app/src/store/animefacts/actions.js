import { API_URL_AnimeFacts } from "../../utils/variables";

export const GET_ANIMEFACTS_REQUEST = "ANIMEFACTS:GET_ANIMEFACTS_REQUEST";
export const GET_ANIMEFACTS_SUCCESS = "ANIMEFACTS:GET_ANIMEFACTS_SUCCESS";
export const GET_ANIMEFACTS_FAILURE = "ANIMEFACTS:GET_ANIMEFACTS_FAILURE";

export const getAnimeFactsRequest = () => ({
  type: GET_ANIMEFACTS_REQUEST,
});

export const getAnimeFactsSuccess = (facts) => ({
  type: GET_ANIMEFACTS_SUCCESS,
  payload: facts,
});

export const getAnimeFactsFailure = (error) => ({
  type: GET_ANIMEFACTS_FAILURE,
  payload: error,
});

export const getAnimeFacts = () => async (dispatch) => {
  dispatch(getAnimeFactsRequest());

  try {
    const response = await fetch(API_URL_AnimeFacts);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const result = await response.json();
    dispatch(getAnimeFactsSuccess(result));
  } catch (err) {
    dispatch(getAnimeFactsFailure(err));
    console.warn(err);
  }
};