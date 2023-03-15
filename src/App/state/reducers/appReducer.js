import { initialState } from "../AppStateContext";
import { favoriteImagesReducer } from "./favoritesImagesReducer";
import { fetchImagesReducer } from "./fetchImagesReducer";
import { isFetchedReducer } from "./isFetchedReducer";
import { searchParamsReducer } from "./searchParamsReducer";

const handlers = {
  ...fetchImagesReducer,
  ...favoriteImagesReducer,
  ...searchParamsReducer,
  ...isFetchedReducer,
};

function reducerFactory(initialState, handlers) {
  return function (state = initialState, action) {
    const handler = handlers[action.type];
    if (handler) {
      return handler(state, action);
    }
    return state;
  };
}
export const appReducer = reducerFactory(initialState, handlers);
