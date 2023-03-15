import { createAction } from "../../utils/createAction";
import { actionTypes } from "./actionTypes";

export const setIsFetchedAction = (isFetched) => {
  const payload = { isFetched };
  return createAction(actionTypes.SET_IS_FETCHED, payload);
};
