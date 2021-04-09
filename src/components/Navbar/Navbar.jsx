import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Headroom from 'react-headroom';

import logo from '../../assets/logo.png';
import useStyles from './styles';

const PrimarySearchAppBar = ({ totalItems }) => {
  const classes = useStyles();

  return (
    <>
      <Headroom className={classes.root}>
        <AppBar position="relative" className={classes.appBar} color="inherit">
          <Toolbar>
            <Typography component={Link} to="/" variant="h5" className={classes.title} color="inherit">
              <img src={logo} alt="Fortress Skateboards" height="48px" className={classes.image} /> Fortress Skateboards
            </Typography>
            <div className={classes.grow} />
            <div className={classes.button}>
              <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </Headroom>
    </>
  );
};

export default PrimarySearchAppBar;
