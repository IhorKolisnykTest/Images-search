import { createAction } from "../../utils/createAction";
import { actionTypes } from "./actionTypes";

export const addFavoriteImageAction = (image) => {
  const payload = { image };
  return createAction(actionTypes.ADD_FAVORITE, payload);
};

export const removeFavoriteImageAction = (image) => {
  const payload = { image };
  return createAction(actionTypes.REMOVE_FAVORITE, payload);
};
