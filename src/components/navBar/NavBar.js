import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Paper from "@material-ui/core/Paper";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useDispatch } from "react-redux";
import MenuButton from "../menu-button/MenuButton";
import SubMenu from "../sub-menu/SubMenu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Drawer from "@material-ui/core/Drawer";
import { getCategories } from "../../components/page-layout/CategoryAction";

import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles({
  drawer: {
    // width: 0,
    // minHeight: "80vh",
    // height: "calc(100% - 64px)",
    // top: 64,
    position: "static",
    transition: "width .7s",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: `calc(100% - 300px)`,
  },
});
const NavBar = () => {
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
  const parentCats = catList.filter((row) => !row.parentCat);
  console.log(parentCats);
  const childCats = catList.filter((row) => row.parentCat);
  /*  */
  return (
    <Grid container>
      <Grid item sm={12} container>
        <AppBar position="fixed">
          <Toolbar>
            <Grid container maxWidth="lg" spacing={4}>
              <Grid item sm={2}>
                <IconButton
                  // className="exampleClass :hover ::after"
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
                    style={{ color: "black" }}
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
              <Grid item spacing={5} sm={3} justify-content="center" container>
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
      <Grid item sm={12} container>
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

          {parentCats?.length &&
            parentCats.map((row) => (
              <List>
                <ListItem key={row._id}>
                  {/* <Link style={{ color: "black" }}>
                        <ListItemText primary={row.name} />{" "}
                      </Link> */}
                  <SubMenu
                    parentName={row.name}
                    parentId={row._id}
                    childCatList={childCats}
                  />
                </ListItem>
              </List>
            ))}
        </Drawer>
      </Grid>
    </Grid>
  );
};

export default NavBar;
