import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useTheme } from "@mui/material/styles";

const ImageSlider = () => {
  const theme = useTheme();

  const [catName, setCatname] = useState("");
  return (
    <Card>
      <Box>
        <CardContent>
          <Typography>Category name</Typography>
        </CardContent>
        <Box>
          <IconButton aria-label="previous">
            {theme.direction === "rtl" ? (
              <NavigateNextIcon />
            ) : (
              <NavigateBeforeIcon />
            )}
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === "rtl" ? (
              <NavigateBeforeIcon />
            ) : (
              <NavigateNextIcon />
            )}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        image="https://cdn.vox-cdn.com/thumbor/avQXnY3_y3EE2SbGO_UwMnpZJyM=/0x0:2400x1566/1200x800/filters:focal(1008x591:1392x975)/cdn.vox-cdn.com/uploads/chorus_image/image/67708941/ps5_hardware_render.0.jpg"
        alt="placeholder image"
      />
    </Card>
  );
};

export default ImageSlider;
