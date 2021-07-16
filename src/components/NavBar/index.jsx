import React, { useContext } from "react";

import { AppBar, Badge, IconButton, Toolbar } from "@material-ui/core";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";

import logo from "../../assets/pubdelivery.png";
import { useStyles } from "./styles";
import { withRouter } from "react-router-dom";
import { CartContext } from "../../providers/CartContext";

function NavBar({ history }) {
  const classes = useStyles();
  const { cartItemsLength } = useContext(CartContext);

  function goCart() {
    history.push("/cart");
  }

  return (
    <AppBar position="static" className={classes.container}>
      <Toolbar className={classes.flexControl}>
        <img src={logo} alt="PubDelivery" className={classes.logo} />
        <IconButton edge="end" className={classes.iconButton} onClick={goCart}>
          <Badge badgeContent={cartItemsLength} color="secondary">
            <ShoppingCartRoundedIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default withRouter(NavBar);
