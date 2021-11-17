import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getProductsAction } from "./ProductAction";
import { getSubCatId } from "../../components/page-layout/CategoryAction";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});
const CatPage = () => {
  const { slug } = useParams();
  const { catList } = useSelector((state) => state.category);
  const { productList } = useSelector((state) => state.product);
  const currentCat = catList.filter((item) => item.slug === slug);
  const currentId = currentCat[0]?._id;
  console.log(currentId, ">>>>>");
  const currentProducts = productList.filter((item) =>
    item.categories.includes(currentId)
  );
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsAction(currentId));
  }, [dispatch]);
  console.log("sdfsdffdffffddfdfdf");
  return (
    <Grid container>
      {currentProducts.map((item) => (
        <Grid item xs={12} sm={6} md={3} container>
          <Grid item>
            <p>{item.title}</p>
          </Grid>
          <Grid item>{item.brand}</Grid>
          <Grid item>{item.price}</Grid>
          <Grid item>{item.description}</Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default CatPage;
