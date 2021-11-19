import React from "react";
import Grid from "@material-ui/core/Grid";
import BusinessIcon from "@mui/icons-material/Business";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import Container from "@material-ui/core/Container/";

import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <AppBar
      anchor="bottom"
      px={{ xs: 3, sm: 10 }}
      py={{ xs: 5, sm: 10 }}
      // className={classes.footer}
      // position="fixed"
      position="static"
      color="primary"
    >
      <Container maxWidth="lg">
        <Toolbar>
          <Grid container maxWidth="lg" spacing={4}>
            <Grid item sm={6} xs={8}>
              <Typography variant="body1" color="inherit">
                © 2021 Luit
              </Typography>
            </Grid>
            <Grid spacing={{ xs: 8 }} item sm={6} xs={4} container>
              <Grid item sm={6} xs={12}>
                <IconButton>
                  <Link
                    textDecoration="none"
                    to="/about"
                    underline="none"
                    style={{ color: "black" }}
                    className="exampleClass :hover ::after"
                  >
                    <BusinessIcon label="About" />
                  </Link>
                </IconButton>
              </Grid>
              <Grid item sm={6} xs={12}>
                <IconButton>
                  <Link
                    textDecoration="none"
                    to="/help"
                    underline="none"
                    className="exampleClass :hover ::after"
                    style={{ color: "black" }}
                  >
                    <LiveHelpIcon label="Help" />
                  </Link>
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
