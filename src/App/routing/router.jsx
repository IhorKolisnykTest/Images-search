import React from "react";
import { createBrowserRouter } from "react-router-dom";

import AppRoot from "../components/AppRoot/AppRoot";
import { ErrorHandler } from "../components/ErrorHandler/ErrorHandler";
import { FavoriteImages } from "../components/FavoritesImages/FavoriteImages";
import { SearchPage } from "../components/SearchPage/SearchPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRoot />,
    errorElement: <ErrorHandler />,
    children: [
      { index: true, element: <SearchPage /> },
      { path: "favorites", element: <FavoriteImages /> },
    ],
  },
]);
