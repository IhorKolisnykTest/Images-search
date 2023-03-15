import { createContext } from "react";

export const initialState = {
  images: null,
  isLoading: false,
  error: null,
  favorites: [],
  searchQuery: "",
  page: 1,
  isFetched: false,
};

export const LOCAL_STORAGE_KEY = "favorites";

export const initializer = (initialValue = initialState) => {
  const persistedState = localStorage.getItem(LOCAL_STORAGE_KEY)
    ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    : null;
  return {
    ...initialValue,
    favorites: persistedState || initialValue.favorites,
  };
};

export const AppStateContext = createContext(initialState);
