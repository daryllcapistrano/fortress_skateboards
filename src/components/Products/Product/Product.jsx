import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@material-ui/core';

import useStyles from './styles';

const Product = ({ product }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0}>
      <CardMedia className={classes.media} image={product.media.source} title={product.name} />
      <CardContent className={classes.cardContent}>
        <Typography className={classes.productName} variant="h5" component="h2" color="textPrimary">
          {product.name}
        </Typography>
        <Typography className={classes.productPrice} variant="h5" component="h2" color="textSecondary">
          ${product.price.raw}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <Button component={Link} to={`/${product.permalink}`} aria-label="view details" size="small" disableElevation={true}>
          view details
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
