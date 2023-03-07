import React, { useContext } from "react";

import { AppBar, Badge, IconButton, Toolbar } from "@material-ui/core";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";

import { withRouter } from "react-router-dom";
import logo from "../../assets/pubdelivery.png";
import { useStyles } from "./styles";
import { CartContext } from "../../providers/CartContext";

function NavBar({ history }) {
  const classes = useStyles();
  const { cartItemsLength } = useContext(CartContext);

  function goCart() {
    history.push("/cart");
  }

  function goHome() {
    history.push("/");
  }

  return (
    <AppBar position="fixed" className={classes.container}>
      <Toolbar className={classes.flexControl}>
        <img
          src={logo}
          onClick={goHome}
          alt="House Sushi"
          className={classes.logo}
        />
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
