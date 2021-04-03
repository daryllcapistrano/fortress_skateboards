import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <Card className={classes.root} elevation={1}>
      <Link to={`/${product.permalink}`} aria-label="go to details page" className={classes.link}>
        <CardMedia className={classes.media} image={product.media.source} title={product.name} />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom className={classes.productName} variant="h5" component="h2" color="textPrimary">
            {product.name}
          </Typography>
          <Typography gutterBottom className={classes.productPrice} variant="h5" component="h2" color="textSecondary">
            ${product.price.raw}
          </Typography>
        </CardContent>
      </Link>
      <CardActions disableSpacing className={classes.cardActions}>
        <Button aria-label="add to cart" onClick={handleAddToCart} startIcon={<AddShoppingCart />}>
          add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
