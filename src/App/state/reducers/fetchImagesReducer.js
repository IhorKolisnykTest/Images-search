import { actionTypes } from "../actions/actionTypes";

export const fetchImagesReducer = {
  [actionTypes.SET_IMAGES]: (state, action) => ({
    ...state,
    images: action.payload.images,
  }),
  [actionTypes.SET_IS_LOADING]: (state, action) => ({
    ...state,
    isLoading: action.payload.isLoading,
  }),
  [actionTypes.SET_ERROR]: (state, action) => ({
    ...state,
    error: action.payload.error,
  }),
};
