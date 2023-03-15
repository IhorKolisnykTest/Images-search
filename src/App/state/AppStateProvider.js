import { useEffect, useReducer } from "react";
import { appReducer } from "./reducers/appReducer";
import {
  AppStateContext,
  initializer,
  initialState,
  LOCAL_STORAGE_KEY,
} from "./AppStateContext";

export const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState, initializer);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.favorites));
  }, [state.favorites]);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};
