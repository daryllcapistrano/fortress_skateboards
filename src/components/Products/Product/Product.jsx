import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, CardActions, Typography, Button, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <Card className={classes.root} elevation={1}>
      <Link to={`/${product.permalink}`}>
        <CardMedia className={classes.media} image={product.media.source} title={product.name} />
      </Link>
      <div className={classes.overlay}>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom className={classes.productName} variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom className={classes.productPrice} variant="h5" component="h2" color="textSecondary">
            ${product.price.formatted}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton variant="contained" aria-label="add to cart" onClick={handleAddToCart}>
            <AddShoppingCart />
          </IconButton>
          <Button component={Link} to={`/${product.permalink}`} variant="contained" aria-label="go to details page">
            view details
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};

export default Product;
