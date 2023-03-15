import React from "react";

import { RouterProvider } from "react-router-dom";
import { router } from "./routing/router";
import { AppStateProvider } from "./state/AppStateProvider";

export const App = () => {
  return (
    <AppStateProvider>
      <RouterProvider router={router} />
    </AppStateProvider>
  );
};
