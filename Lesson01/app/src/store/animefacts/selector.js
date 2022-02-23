import { FETCH_STATUSES } from "../../utils/variables";

export const selectAnimeFacts = (state) => state.animeFacts.data.data;
export const selectAnimeFactsLoading = (state) =>
  state.animeFacts.status === FETCH_STATUSES.REQUEST;
export const selectError = (state) => state.animeFacts.error;