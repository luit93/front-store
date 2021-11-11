import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getProducts } from "./StoreAction";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});
const StorePage = ({ category }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isPending, productList } = useSelector((state) => state.category);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <Grid container>
      {productList.map((item) => (
        <Grid item xs={12} sm={6} md={3} container>
          <Grid item>{item.title}</Grid>
          <Grid item>{item.brand}</Grid>
          <Grid item>{item.price}</Grid>
          <Grid item>{item.description}</Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default StorePage;
