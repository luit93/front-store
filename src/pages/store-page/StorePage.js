import React from "react";
import CatNav from "../../components/CatNav/CatNav";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});
const StorePage = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={3}>
        <CatNav>{children}</CatNav>
      </Grid>
    </Grid>
  );
};

export default StorePage;
