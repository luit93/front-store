import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Container from "@material-ui/core/Container/";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [searchItem, setSearchItem] = useState("");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchItem) {
      console.log(searchItem);
    }
  };
  return (
    <Container>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" color="secondary">
            <Link
              textDecoration="none"
              to="/home"
              underline="none"
              className="exampleClass :hover ::after"
            >
              🤖TECH_STORE🤖
            </Link>
          </Typography>
          <form noValidate onSubmit={handleOnSubmit}>
            <TextField
              onChange={(e) => setSearchItem(e.target.value)}
              label="Search"
              size="small"
              required
              InputProps={{
                endAdornment: (
                  <IconButton type="submit">
                    <SearchIcon />
                  </IconButton>
                ),
              }}
            />
          </form>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default NavBar;
