import { Box, Container, Grid, Pagination, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppState } from "../../hooks/useAppState";
import { useFetchImages } from "../../hooks/useFetchImages";
import {
  addFavoriteImageAction,
  removeFavoriteImageAction,
} from "../../state/actions/setFavoriteImagesActions";
import { setPageAction } from "../../state/actions/setSearchParamsActions";
import { ImageCard } from "../ImageCard/ImageCard";
import styled from "styled-components";

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
  const [page, setPage] = useState(1);
  const { state, dispatch } = useAppState();
  const fetchImages = useFetchImages();

  const handleChange = (event, value) => {
    setPage(value);
    dispatch(setPageAction(value));
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
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {state?.images?.hits?.map((i) => (
                <Grid item xs={2} sm={4} md={4} key={i.id}>
                  <ImageCard image={i} handleFavorite={handleAddToFavorites} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Stack spacing={2}>
            <Pagination
              sx={{ my: "15px", mx: "auto" }}
              count={Math.ceil(state.images.totalHits / 9)} // 9 is default number of results per page
              page={page}
              onChange={(event, value) => handleChange(event, value)}
            />
          </Stack>
        </>
      )}
    </Container>
  );
};
