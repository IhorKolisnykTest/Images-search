import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppState } from "../../hooks/useAppState";
import { useFetchImages } from "../../hooks/useFetchImages";
import { setSearchQueryAction } from "../../state/actions/setSearchParamsActions";
import { setIsFetchedAction } from "../../state/actions/setIsFetchedActions";

const Form = styled.form`
  display: flex;
`;

export const SearchHeader = () => {
  const [searchText, setSearchText] = useState("");
  const { state, dispatch } = useAppState();
  const fetchImages = useFetchImages();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = () => {
    navigate("/");
    fetchImages();
    dispatch(setIsFetchedAction(true));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (!searchText) return;
      handleSearch();
      dispatch(setIsFetchedAction(true));
    }
  };

  const handleChange = (e) => {
    const searchQuery = e.target.value;
    setSearchText(searchQuery);
    dispatch(setSearchQueryAction(searchQuery));
  };

  const handleNavigateToFavorites = () => {
    const isFavoritePage = location.pathname === "/favorites";
    navigate(isFavoritePage ? "/" : "/favorites");
  };
  console.log(location.pathname);
  return (
    <Grid
      container
      alignItems="stretch"
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{ px: 15 }}
    >
      <Grid item xs={4} sm={8} md={8}>
        <Form>
          <TextField
            autoFocus
            sx={{
              textTransform: "none",
              m: 2,
              bgcolor: "white",
              width: "100%",
            }}
            onKeyDown={handleKeyDown}
            value={searchText}
            onInput={handleChange}
            variant="outlined"
            placeholder="What images would you like to see on Pixabay?"
            size="medium"
          />
          <Button
            sx={{ textTransform: "none", m: 2, ml: 0 }}
            aria-label="search"
            variant="contained"
            disabled={!searchText}
            size="large"
            onClick={() => handleSearch()}
            startIcon={<SearchIcon />}
          >
            {state.isLoading ? "...Searching" : "Search"}
          </Button>
        </Form>
      </Grid>

      <Grid item xs={2} sm={4} md={4}>
        <Button
          sx={{ textTransform: "none", m: 2, height: "-webkit-fill-available" }}
          aria-label="favorites"
          variant="contained"
          size="large"
          onClick={handleNavigateToFavorites}
          startIcon={
            location.pathname === "/favorites" ? (
              <ArrowBack />
            ) : (
              <FavoriteIcon />
            )
          }
        >
          {location.pathname === "/favorites" ? "To search" : "Favorites"}
        </Button>
      </Grid>
    </Grid>
  );
};
