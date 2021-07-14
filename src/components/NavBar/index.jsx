import React from 'react';

import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';

import logo from '../../assets/pubdelivery.png';
import { useStyles } from './styles';
import { withRouter } from 'react-router-dom';

function NavBar({history}) {
  const classes = useStyles();

  function goCart() {
    history.push('/cart')
  }

  return (
    <AppBar position="static" className={classes.container}>
      <Toolbar className={classes.flexControl}>
        <img src={logo} alt="PubDelivery" className={classes.logo} />
        <IconButton edge="end" className={classes.iconButton} onClick={goCart}>
          <ShoppingCartRoundedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default withRouter(NavBar)