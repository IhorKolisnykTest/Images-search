import { Pagination, Stack } from "@mui/material";
import React, { useState } from "react";

export const ImagePagination = ({ handleChangePage, count }) => {
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    if (handleChangePage) handleChangePage(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        sx={{ my: "15px", mx: "auto" }}
        count={count}
        page={page}
        onChange={(event, value) => handleChange(event, value)}
      />
    </Stack>
  );
};
