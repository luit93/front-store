import React from "react";
import { makeStyles } from "@material-ui/core";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";

const useStyles = makeStyles({
  page: {
    background: "#f9f9f9",
    width: "100%",
  },
});
const PageLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className="page-layout">
      <NavBar />
      <div className={classes.page}>{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
