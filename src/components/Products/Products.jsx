import React from 'react';
import Grid from '@material-ui/core/Grid';
import { CircularProgress } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  if (!products.length)
    return (
      <div style={{ height: `100vh`, position: `relative` }}>
        <div style={{ position: ` absolute`, top: `50%`, left: `50%`, transform: `translate(-50%, -50%)` }}>
          <CircularProgress color="secondary" />
        </div>
      </div>
    );

  return (
    <div className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container spacing={2}>
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
