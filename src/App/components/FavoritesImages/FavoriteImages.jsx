import { Box, Container, Grid, Pagination, Stack } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { useAppState } from "../../hooks/useAppState";
import {
  addFavoriteImageAction,
  removeFavoriteImageAction,
} from "../../state/actions/setFavoriteImagesActions";
import { setIsFetchedAction } from "../../state/actions/setIsFetchedActions";
import { ImageCard } from "../ImageCard/ImageCard";
import { NoImages } from "../SearchPage/SearchPage";
import styled from "styled-components";
import { useModal } from "../../hooks/useModal";

export const FavoriteImagesTitle = styled.h1`
  padding: 20px;
  margin: 0;
`;

export const FavoriteImages = () => {
  const { state, dispatch } = useAppState();
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(1);
  const { show, hide, RenderModal } = useModal();

  const handleSelect = (e, image) => {
    setSelectedImage(image);
    show();
  };

  // useEffect(() => {
  //   dispatch(setIsFetchedAction(true));
  // }, []);

  const handleChange = (event, value) => {
    setPage(value);
  };

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
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {pageResults?.map((i) => (
                <Grid item xs={2} sm={4} md={4} key={i.id}>
                  <ImageCard
                    image={i}
                    handleFavorite={handleAddToFavorites}
                    onClick={handleSelect}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>

          <Stack spacing={2}>
            <Pagination
              sx={{ my: "15px", mx: "auto" }}
              count={Math.ceil(state.favorites.length / 9)} // 9 is default number of results per page
              page={page}
              onChange={(event, value) => handleChange(event, value)}
            />
          </Stack>

          {selectedImage && (
            <RenderModal onClose={hide}>
              <ImageCard
                modalMode
                image={selectedImage}
                handleFavorite={handleAddToFavorites}
              />
            </RenderModal>
          )}
        </>
      )}
    </Container>
  );
};
