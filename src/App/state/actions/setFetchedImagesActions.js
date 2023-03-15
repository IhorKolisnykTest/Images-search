import { createAction } from "../../utils/createAction";
import { actionTypes } from "./actionTypes";

export const setImagesAction = (images) => {
  const payload = { images };
  return createAction(actionTypes.SET_IMAGES, payload);
};

export const setErrorAction = (error) => {
  const payload = { error };
  return createAction(actionTypes.SET_ERROR, payload);
};

export const setIsLoadingAction = (isLoading) => {
  const payload = { isLoading };
  return createAction(actionTypes.SET_IS_LOADING, payload);
};
