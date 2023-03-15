import { Container } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useAppState } from "../../hooks/useAppState";
import {
  addFavoriteImageAction,
  removeFavoriteImageAction,
} from "../../state/actions/setFavoriteImagesActions";
import { setIsFetchedAction } from "../../state/actions/setIsFetchedActions";
import { ImageList } from "../ImageList/ImageList";
import { ImagePagination } from "../Pagination/Pagination";
import { NoImages } from "../SearchPage/SearchPage";

export const FavoriteImagesTitle = styled.h1`
  padding: 20px;
  margin: 0;
`;

export const FavoritePage = () => {
  const { state, dispatch } = useAppState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(setIsFetchedAction(true));
  }, []);

  const pageResults = useMemo(() => {
    return state.favorites.slice((page - 1) * 9, (page - 1) * 9 + 9); // 9 is number of images per page
  }, [page, state.favorites]);

  const handleAddToFavorites = (im, isFav) => {
    dispatch(
      isFav ? addFavoriteImageAction(im) : removeFavoriteImageAction(im)
    );
  };

  return (
    <Container maxWidth="lg">
      <FavoriteImagesTitle>Favorite images</FavoriteImagesTitle>
      {!state?.favorites?.length ? (
        <NoImages>No images</NoImages>
      ) : (
        <>
          <ImageList
            images={pageResults}
            handleAddToFavorites={handleAddToFavorites}
          ></ImageList>
          <ImagePagination
            handleChangePage={(page) => setPage(page)}
            count={Math.ceil(state.favorites.length / 9)} // 9 is default number of images per page
          />
        </>
      )}
    </Container>
  );
};
