import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
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
        style={{ backgroundColor: "orange", color: "black" }}
      >
        <AccountBoxIcon className={classes.link} />
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
          <Link to="/account">My Account</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/orders">My Orders</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/login">Logout</Link>
        </MenuItem>
      </Menu>
    </div>
  );
};
export default MenuButton;
