import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
const drawerWidth = 240;
const drawerHeight = 450;
const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,
    height: drawerHeight,
  },
  drawerPaper: {
    width: drawerWidth,
    height: drawerHeight,
  },
});
const CatNav = () => {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      anchor="left"
      classes={{ paper: classes.drawerPaper }}
    >
      <div>
        <Typography variant="h5">Categories</Typography>
      </div>
    </Drawer>
  );
};

export default CatNav;
