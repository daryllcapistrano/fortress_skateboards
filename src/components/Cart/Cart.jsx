import React from 'react';
import { Typography, Button, Grid } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();

  // const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">
      No items in your shopping cart :(
      <Link className={classes.link} to="/">
        {' '}
        go back to products page
      </Link>
    </Typography>
  );

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  if (!cart.line_items) return 'Loading';

  const renderCart = () => (
    <div className={classes.wrapper}>
      <Grid container spacing={3}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} key={lineItem.id}>
            <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button
            className={classes.checkoutButton}
            component={Link}
            to="/checkout"
            size="large"
            type="button"
            variant="contained"
            fullWidth
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className={classes.root}>
      <div className={classes.navigation}>
        <Button onClick={goBack} startIcon={<KeyboardBackspaceIcon />}>
          back
        </Button>
      </div>
      <div className={classes.wrapper}>
        <Typography className={classes.title} variant="h1" gutterBottom>
          Your Shopping Cart
        </Typography>
        {!cart.line_items.length ? renderEmptyCart() : renderCart()}
      </div>
    </div>
  );
};

export default Cart;
