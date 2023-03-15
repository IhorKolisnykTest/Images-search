import { actionTypes } from "../actions/actionTypes";

export const searchParamsReducer = {
  [actionTypes.SET_SEARCH_QUERY]: (state, action) => ({
    ...state,
    searchQuery: action.payload.searchQuery,
  }),
  [actionTypes.SET_PAGE]: (state, action) => ({
    ...state,
    page: action.payload.page,
  }),
};