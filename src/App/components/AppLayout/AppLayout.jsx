import Container from "@mui/material/Container";
import React from "react";
import { useAppState } from "../../hooks/useAppState";
import "./AppLayout.css";

export const AppLayout = ({ slotHeader, children }) => {
  const { state } = useAppState();

  return (
    <div className="main-container">
      <header className={state.isFetched ? "isFetchedHeader" : ""}>
        <Container
          sx={{ height: "100%", display: "flex", alignItems: "center" }}
          maxWidth="lg"
        >
          {slotHeader}
        </Container>
      </header>

      <main className={state.isFetched ? "isFetchedMain" : ""}>{children}</main>
    </div>
  );
};
