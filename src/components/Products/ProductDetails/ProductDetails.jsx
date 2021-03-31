import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const ProductDetails = ({ products, onAddToCart }) => {
  const { permalink } = useParams();
  const product = products.find((prod) => prod.permalink === permalink);

  const classes = useStyles();

  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <>
      {product && (
        <div className={classes.content}>
          <Card className={classes.root} elevation={0}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <CardContent>
              <div className={classes.cardContent}>
                <Typography gutterBottom className={classes.productName} variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography gutterBottom className={classes.productPrice} variant="h5" component="h2">
                  ${product.price.formatted}
                </Typography>
              </div>
              <Link to={`/${product.permalink}`}>{product.name}</Link>
              <Typography
                dangerouslySetInnerHTML={{ __html: product.description }}
                variant="body2"
                color="textSecondary"
                component="p"
              />
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
              <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
                <AddShoppingCart />
              </IconButton>
            </CardActions>
          </Card>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
