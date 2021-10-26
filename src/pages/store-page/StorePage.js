import React from "react";

import CatNav from "../../components/CatNav/CatNav";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
const StorePage = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <CatNav />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>2</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>4</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default StorePage;
