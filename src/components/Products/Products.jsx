import React, { Component } from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";

import useStyles from "./styles";

// const products = [
//   {
//     id: 1,
//     name: "Nike Air Max 2015",
//     description: "Men Running shoes.",
//     price: "€120,99",
//     image:
//       "https://i8.amplience.net/i/jpl/jd_166735_a?qlt=92&w=750&h=531&v=1%201x,%20https://i8.amplience.net/i/jpl/jd_166735_a?qlt=92&w=950&h=673&v=1%202x,%20https://i8.amplience.net/i/jpl/jd_166735_a?qlt=92&w=1200&h=850&v=1%203x",
//   },
//   {
//     id: 2,
//     name: "Nike Air Max 95 ",
//     description: "Women Running Shoes.",
//     price: "€149,99",
//     image:
//       "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/su7eounqce853webmysz/air-max-95-damesschoen-FH8sPc.jpg",
//   },
// ];

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
        <div className={classes.toolbar}/>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
