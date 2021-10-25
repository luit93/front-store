import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuButton from "../menu-button/MenuButton";
import AssessmentIcon from "@mui/icons-material/Assessment";
import TextField from "@mui/material/TextField";
import Container from "@material-ui/core/Container/";
import StorefrontIcon from "@mui/icons-material/Storefront";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    justifyContent: "flex-start",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "white",
      borderBottom: "1px solid black",
    },
  },
}));

const Banner = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <Container>
      <AppBar
        position="static"
        style={{ backgroundColor: "orange", color: "black" }}
      >
        <CssBaseline />
        <Toolbar>
          <Typography variant="h4" className={classes.logo}>
            <Link to="/" className={classes.link}>
              TECH STORE
            </Link>
          </Typography>
          <div
            className={classes.navlinks}
            showLabels
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <div className="container">
              <div>
                <Link to="/store">
                  <StorefrontIcon label="Store" className={classes.link} />
                </Link>
              </div>
              <div>
                <TextField id="outlined-basic" label="search" />
              </div>
              <div>
                <Link to="/cart">
                  <ShoppingCartIcon label="Cart" className={classes.link} />
                </Link>
              </div>

              <div>
                <MenuButton />
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Container>
  );
};
export default Banner;
