import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PersonIcon from "@mui/icons-material/Person";

import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    // marginLeft: theme.spacing(20),
    "&:hover": {
      color: "white",
      // borderBottom: "1px solid black",
    },
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
        <PersonIcon className={classes.link} />
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
            underline="none"
            className="exampleClass :hover ::after"
          >
            My Account
          </Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Link
            textDecoration="none"
            to="/login"
            underline="none"
            className="exampleClass :hover ::after"
          >
            Log In
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};
export default MenuButton;
