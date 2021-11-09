import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";
import Paper from "@material-ui/core/Paper";
import TextField from "@mui/material/TextField";
import Container from "@material-ui/core/Container/";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from "@mui/icons-material/Business";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@material-ui/core/Box";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Grid from "@material-ui/core/Grid";
import Drawer from "@material-ui/core/Drawer";
import { getCategories } from "./CategoryAction";
import { useDispatch } from "react-redux";
import MenuButton from "../menu-button/MenuButton";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import clsx from "clsx";

const drawerWidth = 240;
const useStyles = makeStyles({
  page: {
    background: "#f9f9f9",
    width: "100%",
  },
  footer: {
    clear: "both",
    position: "relative",
    height: 80,
    marginTop: -80,
  },
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: `calc(100% - 300px)`,
  },
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
  root2: {
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
const PageLayout = ({ children }) => {
  // const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const { isPending, catList } = useSelector((state) => state.category);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  const [searchItem, setSearchItem] = useState("");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchItem) {
      console.log(searchItem);
    }
  };
  const classes = useStyles();
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={classes.root}>
      {/* <div sx={{ display: "flex" }}> */}
      <Grid container sx={{ display: "flex" }}>
        {/* //header */}
        <Grid item sm={12} container>
          <AppBar position="fixed">
            <Toolbar>
              <Grid container maxWidth="lg" spacing={4}>
                <Grid item sm={2}>
                  <IconButton
                    className="exampleClass :hover ::after"
                    onClick={() => setIsOpened(!isOpened)}
                  >
                    {isOpened ? <ChevronLeftIcon /> : <MenuOpenIcon />}
                  </IconButton>
                </Grid>
                {/* <Grid container maxWidth="lg" spacing={4}> */}
                <Grid item sm={3}>
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
                </Grid>
                <Grid item sm={4}>
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
                </Grid>
                <Grid
                  item
                  spacing={5}
                  sm={3}
                  justify-content="center"
                  container
                >
                  <Grid item>
                    <IconButton
                      textDecoration="none"
                      underline="none"
                      className="exampleClass :hover ::after"
                    >
                      <MenuButton />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          <Toolbar />
        </Grid>
        {/* ///dynamic area */}
        <Grid item sm={12} className="main">
          <div className={classes.container}>
            <Drawer
              variant="permanent"
              classes={{
                paper: clsx(classes.drawer, {
                  [classes.closed]: !isOpened,
                  [classes.opened]: isOpened,
                }),
              }}
            >
              {isPending && <CircularProgress color="inherit" />}
              <List>
                {catList?.length &&
                  catList.map((row) => (
                    <ListItem key={row._id}>
                      <ListItemText primary={row.name} />
                    </ListItem>
                  ))}
              </List>

              {/* //list of categories */}
            </Drawer>
            <main className={classes.main}>
              <div>{children}</div>
            </main>
          </div>
          <Paper>{/* <div className={classes.page}>{children}</div> */}</Paper>
        </Grid>
        {/* </div> */}
        {/* <div> */}
        {/* //footer */}
        <Grid item sm={12}>
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
                  <Grid item sm={6} xs={4} container>
                    <Grid item xs={6}>
                      <IconButton>
                        <Link
                          textDecoration="none"
                          to="/about"
                          underline="none"
                          className="exampleClass :hover ::after"
                        >
                          <BusinessIcon label="About" />
                        </Link>
                      </IconButton>
                    </Grid>
                    <Grid item xs={6}>
                      <IconButton>
                        <Link
                          textDecoration="none"
                          to="/help"
                          underline="none"
                          className="exampleClass :hover ::after"
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
        </Grid>
        {/* </div> */}
      </Grid>
    </div>
  );
};

export default PageLayout;
