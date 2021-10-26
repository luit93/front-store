import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from "@mui/icons-material/Business";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import Container from "@material-ui/core/Container/";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
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

const Footer = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <Container
      position="fixed"
      sx={{ top: "auto", bottom: 0 }}
      className="footer"
    >
      <AppBar
        position="static"
        style={{
          color: "black",
        }}
      >
        <CssBaseline />
        <Toolbar>
          <div
            className={classes.navlinks}
            showLabels
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <Link to="/about" className={classes.link}>
              <BusinessIcon label="About" />
            </Link>
            <Link to="/help" className={classes.link}>
              <LiveHelpIcon label="Help" />
            </Link>
            <Link to="/address" className={classes.link}>
              <LocationOnIcon label="Address" />
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Container>
  );
};
export default Footer;
