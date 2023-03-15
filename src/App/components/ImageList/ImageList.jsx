import { Box, Grid } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useModal } from "../../hooks/useModal";
import { ImageCard } from "../ImageCard/ImageCard";

export const ImageList = ({ images, handleAddToFavorites }) => {
  const { show, hide, RenderModal } = useModal();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSelect = (e, image) => {
    setSelectedImage(image);
    show();
  };

  const handleClose = useCallback(() => {
    setSelectedImage(null);
    hide();
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {images?.map((i) => (
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

      {selectedImage && (
        <RenderModal onClose={handleClose}>
          <ImageCard
            modalMode
            image={selectedImage}
            handleFavorite={handleAddToFavorites}
          />
        </RenderModal>
      )}
    </>
  );
};
