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
        image="https://www.kaijubattle.net/uploads/2/9/5/7/29570123/edited/356179818.jpg"
        alt="placeholder image"
      />
    </Card>
  );
};

export default ImageSlider;
