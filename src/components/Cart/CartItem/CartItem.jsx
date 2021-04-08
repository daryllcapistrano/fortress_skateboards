import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty }) => {
  const classes = useStyles();

  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

  // const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <Card className={classes.cartItem} elevation={0}>
      <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4" style={{ paddingLeft: `.5em` }}>
          {item.name}
        </Typography>
        {item.selected_options.length > 0 && (
          <Typography variant="h5" color="textSecondary" style={{ marginLeft: `.75em`, alignSelf: `center` }}>
            {' '}
            size: {item.selected_options[0].option_name}
          </Typography>
        )}
      </CardContent>
      <CardActions className={classes.cartActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>
            -
          </Button>
          <div>
            <div>qty.</div>
            <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          </div>

          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>
            +
          </Button>
        </div>
        <Typography variant="h6" style={{ paddingRight: `.25em` }}>
          {item.line_total.formatted_with_symbol}
        </Typography>
        {/* <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(item.id)}>
          Remove
        </Button> */}
      </CardActions>
    </Card>
  );
};

export default CartItem;
