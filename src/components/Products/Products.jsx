import React from 'react';
import Grid from '@material-ui/core/Grid';
import { CircularProgress } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  if (!products.length)
    return (
      <div className={classes.wrapper}>
        <div className={classes.innerWrapper}>
          <CircularProgress color="secondary" />
        </div>
      </div>
    );

  return (
    <div className={classes.content}>
      <Grid container spacing={1}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
