import { Container } from "@mui/material";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppState } from "../../hooks/useAppState";
import { useFetchImages } from "../../hooks/useFetchImages";
import {
  addFavoriteImageAction,
  removeFavoriteImageAction,
} from "../../state/actions/setFavoriteImagesActions";
import { setPageAction } from "../../state/actions/setSearchParamsActions";
import { ImageList } from "../ImageList/ImageList";
import { ImagePagination } from "../Pagination/Pagination";

export const SearchPageTitle = styled.h1`
  padding: 20px;
  margin: 0;
`;

export const NoImages = styled.h2`
  align-items: center;
  padding: 20px;
  text-align: center;
  margin: 0;
`;

export const SearchPage = () => {
  const { state, dispatch } = useAppState();
  const fetchImages = useFetchImages();

  const handleChangePage = (page) => {
    dispatch(setPageAction(page));
  };

  useEffect(() => {
    fetchImages();
  }, [state.page]);

  const handleAddToFavorites = (im, isFav) => {
    dispatch(
      isFav ? addFavoriteImageAction(im) : removeFavoriteImageAction(im)
    );
  };

  if (!state.isFetched) return;

  return (
    <Container maxWidth="lg">
      <SearchPageTitle>Searched images</SearchPageTitle>
      {!state?.images?.hits?.length ? (
        <NoImages>{state?.error ? "Error occurs" : "No images"}</NoImages>
      ) : (
        <>
          <ImageList
            images={state?.images?.hits}
            handleAddToFavorites={handleAddToFavorites}
          ></ImageList>
          <ImagePagination
            handleChangePage={handleChangePage}
            count={Math.ceil(state.images.totalHits / 9)} // 9 is default number of images per page
          />
        </>
      )}
    </Container>
  );
};
