import { actionTypes } from "../actions/actionTypes";

export const favoriteImagesReducer = {
  [actionTypes.ADD_FAVORITE]: (state, action) => ({
    ...state,
    favorites: [...state.favorites, action.payload.image],
  }),
  [actionTypes.REMOVE_FAVORITE]: (state, action) => {
    const filteredImages = state.favorites.filter(
      (i) => i.id !== action.payload.image.id
    );
    return { ...state, favorites: filteredImages };
  },
};
