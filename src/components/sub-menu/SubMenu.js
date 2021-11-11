import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";
import Link from "@mui/material/Link";

import { makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    // marginLeft: theme.spacing(20),
    // "&:hover": {
    //   color: "black",
    //   // borderBottom: "1px solid black",
    // },
  },
}));

const SubMenu = ({ parentName, childCatList, parentId }) => {
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
      <Link
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{ color: "black" }}
      >
        <Typography>{parentName}</Typography>
      </Link>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {childCatList.map(
          (item) =>
            item.parentCat === parentId && (
              <MenuItem onClick={handleClose}>
                <Link style={{ color: "black" }}>{item.name}</Link>
              </MenuItem>
            )
        )}
      </Menu>
    </div>
  );
};

export default SubMenu;
