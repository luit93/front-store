import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Toolbar, AppBar } from "@material-ui/core";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link } from "react-router-dom";
import clsx from "clsx";

const drawerWidth = 240;
// const drawerHeight = 450;
const useStyles = makeStyles({
  drawer: {
    // width: 0,
    // minHeight: "80vh",
    // height: "calc(100% - 64px)",
    // top: 64,
    position: "static",
    transition: "width .7s",
  },

  closed: {
    width: "0px",
  },
  opened: {
    width: "240px",
  },
  title: {
    margin: "auto",
  },
  container: {
    display: "flex",
    flex: 1,
  },
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    textAlign: "center",
  },
  main: {
    flex: 1,
  },
  up: {
    display: "flex",
    justifyContent: "right",
    marginLeft: "auto",
    marginRight: 0,
  },
});
const CatNav = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar>
        {" "}
        <Toolbar>
          {" "}
          <IconButton
            className="exampleClass :hover ::after"
            onClick={() => setIsOpened(!isOpened)}
          >
            {isOpened ? <ChevronLeftIcon /> : <MenuOpenIcon />}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Shop All Products
          </Typography>
          <IconButton className={classes.up}>
            <Link
              textDecoration="none"
              to="/home"
              underline="none"
              className="exampleClass :hover ::after"
            >
              {" "}
              <KeyboardArrowUpIcon />
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />

      <div className={classes.container}>
        {/* <Box sx={{ display: "flex" }}> */}
        {/* <CssBaseline /> */}
        {/* <aside className={`${isOpened ? "opened" : ""} drawer`}> */}
        {/* <Drawer
            variant="permanent"
            anchor="left"
            className={classes.drawer}
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
          > */}
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawer, {
              [classes.closed]: !isOpened,
              [classes.opened]: isOpened,
            }),
          }}
        >
          Drawer
        </Drawer>
        {/* </aside> */}
        <main className={classes.main}>
          {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}> */}
          <div>{children}</div>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
        </main>
        {/* </Box> */}
        {/* </Box> */}
      </div>
    </div>
  );
};

export default CatNav;
