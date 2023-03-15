import { createAction } from "../../utils/createAction";
import { actionTypes } from "./actionTypes";

export const setSearchQueryAction = (searchQuery) => {
  const payload = { searchQuery };
  return createAction(actionTypes.SET_SEARCH_QUERY, payload);
};

export const setPageAction = (page) => {
  const payload = { page };
  return createAction(actionTypes.SET_PAGE, payload);
};
