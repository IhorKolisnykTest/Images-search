import { useCallback } from "react";
import { imagesService } from "../api/ImagesService";
import {
  setErrorAction,
  setImagesAction,
  setIsLoadingAction,
} from "../state/actions/setFetchedImagesActions";
import { useAppState } from "./useAppState";

export const useFetchImages = () => {
  const { state, dispatch } = useAppState();

  const fetchImages = useCallback(async () => {
    if (!state?.searchQuery) return;
    dispatch(setIsLoadingAction(true));
    try {
      const res = await imagesService.getImages({
        query: state.searchQuery,
        page: state.page,
      });
      dispatch(setImagesAction(res));
    } catch (e) {
      dispatch(setErrorAction(e));
    }
    dispatch(setIsLoadingAction(false));
  }, [state.searchQuery, state.page]);

  return fetchImages;
};
