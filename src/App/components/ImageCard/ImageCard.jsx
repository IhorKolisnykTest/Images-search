import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import IconButton from "@mui/joy/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import { useAppState } from "../../hooks/useAppState";

export const ImageCard = ({ image, handleFavorite, onClick, modalMode }) => {
  const { state } = useAppState();
  const isFavorite = state.favorites?.some((i) => i.id === image.id);
  const [favorite, setFavorite] = useState(isFavorite);

  const handleAddToFavorite = (e) => {
    e.stopPropagation();
    setFavorite(!favorite);
    handleFavorite(image, !favorite);
  };

  return (
    <Card sx={{ "--Card-padding": "0px" }}>
      <Box
        sx={{ position: "relative", cursor: !modalMode ? "pointer" : "auto" }}
        onClick={(e) => onClick(e, image)}
      >
        <AspectRatio ratio="4/3">
          <figure>
            <img
              src={modalMode ? image.largeImageURL : image.previewURL}
              alt={`${state.searchQuery}_${image.id}`}
            />
          </figure>
        </AspectRatio>
        {!modalMode && (
          <CardCover sx={{ opacity: 1 }}>
            <Box>
              <Box
                sx={{
                  p: 2,
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "end",
                  flexGrow: 1,
                  alignSelf: "flex-end",
                }}
              >
                <IconButton
                  aria-label="add to favorites"
                  onClick={handleAddToFavorite}
                  size="sm"
                  color={favorite ? "danger" : "neutral"}
                >
                  <FavoriteIcon />
                </IconButton>
              </Box>
            </Box>
          </CardCover>
        )}
      </Box>
    </Card>
  );
};
