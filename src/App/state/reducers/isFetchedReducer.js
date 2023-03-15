import { actionTypes } from "../actions/actionTypes";

export const isFetchedReducer = {
  [actionTypes.SET_IS_FETCHED]: (state, action) => ({
    ...state,
    isFetched: action.payload.isFetched,
  }),
};
