import React from "react";
import { Typography } from "@material-ui/core";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const CatPageHeader = ({ catName }) => {
  return (
    <Box
      className="cat-header"
      sx={{
        border: "solid",
        borderRadius: "6px",
        display: "flex",
      }}
    >
      <Typography sx={{ flexGrow: "1" }}>
        <h2>{catName}</h2>
      </Typography>
      <div sx={{ display: "flex", flexDirection: "column" }}>
        <label>Sort By:</label>
        <select>
          <option value="/">Price-Low</option>
          <option value="/">Price-High</option>
        </select>
      </div>
    </Box>
  );
};

export default CatPageHeader;
