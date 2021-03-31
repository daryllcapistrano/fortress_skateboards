import React from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;

  return (
    <div className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={2}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} md={6}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
