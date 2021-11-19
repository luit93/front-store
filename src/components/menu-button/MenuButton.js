import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PersonIcon from "@mui/icons-material/Person";
import HistoryIcon from "@mui/icons-material/History";
// import Link from "@mui/material/Link";
import { Link } from "react-router-dom";

import { makeStyles, Typography } from "@material-ui/core";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "black",

    // marginLeft: theme.spacing(20),
    // "&:hover": {
    //   color: "black",
    //   // borderBottom: "1px solid black",
    // },
  },
}));
const MenuButton = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        // style={{ backgroundColor: "orange", color: "black" }}
      >
        {/* <PersonIcon className={classes.link} /> */}
        <Typography
          sx={{
            fontSize: {
              lg: 30,
              md: 20,
              sm: 15,
              xs: 10,
            },
          }}
          className={classes.link}
        >
          HI, Luit
        </Typography>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link
            textDecoration="none"
            to="/profile"
            underline="hover"
            style={{ color: "black" }}
            // className="exampleClass :hover ::after"
          >
            <PersonIcon /> My Account
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            textDecoration="none"
            to="/history"
            underline="hover"
            style={{ color: "black" }}
            // className="exampleClass :hover ::after"
          >
            <HistoryIcon /> Order History
          </Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Link
            textDecoration="none"
            to="/cart"
            variant="inherit"
            underline="hover"
            style={{ color: "black" }} // className="exampleClass :hover ::after"
          >
            <ShoppingCartIcon />
            Cart
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            textDecoration="none"
            to="/login"
            underline="hover"
            style={{ color: "black" }} // className="exampleClass :hover ::after"
          >
            <LogoutIcon /> Log Out
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};
export default MenuButton;
