import React, { useContext } from "react";
import { Button, Container, Grid, IconButton, Paper, Typography } from "@material-ui/core";

import { useStyles } from "./styles";
import toBRL from "../../tools/toBRL";
import { data } from "../../data/data";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

import Swal from "sweetalert2";
import { CartContext } from "../../providers/CartContext";

export default function ProductList() {
  const classes = useStyles();
  const {
    incremmentAmmountProduct,
    setCartItems,
    setCartItemsLength,
    updateCartTotalSum,
  } = useContext(CartContext);

  function addToCart(id, ammount) {
    // let ammount = 1;
    if (localStorage.hasOwnProperty("cart")) {
      let items = JSON.parse(localStorage.getItem("cart"));
      items.push({ product: id, ammount });
      console.log("items", items);
      let assistantArray = incremmentAmmountProduct(items);
      console.log("assistantArray", assistantArray);
      setCartItems(assistantArray);
      setCartItemsLength(assistantArray.length);
      let itensTemp = JSON.stringify(assistantArray);

      localStorage.setItem("cart", itensTemp);
      updateCartTotalSum(assistantArray);
    } else {
      let items = [];
      items.push({ product: id, ammount });
      let itensTemp = JSON.stringify(items);
      localStorage.setItem("cart", itensTemp);
    }

    const Toast = Swal.mixin({
      toast: true,
      position: "center",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Adicionado ao Carrinho",
    });
  }

  function whatsappMessage() {
    let phone = "5544991595591";
    let text = "Morcego, preciso que me salve !!!";
    window.open(
      `https://api.whatsapp.com/send?phone=${phone}&text=${window.encodeURIComponent(
        text
      )}`
    );
  }

  return (
    <>
      <Container maxWidth="md" className={classes.container}>
        <IconButton onClick={whatsappMessage} color="inherit">
          <WhatsAppIcon />
          (44) 9 9159 - 5591
        </IconButton>
        <Typography gutterBottom variant="h4" color="secondary">
          Cardápio:
        </Typography>
        {data.map((product) => (
          <Paper className={classes.productCard}>
            <Grid container spacing={1}>
              <Grid item xs={6} className={classes.alignItems}>
                <Typography variant="h6">{product.description}</Typography>
              </Grid>
              <Grid item xs={6} align="right">
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Grid container spacing={1}>
                      <Grid item xs={6}>
                        <Typography variant="h6">
                          {toBRL(product.price)}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Button
                          fullWidth
                          variant="contained"
                          className={classes.button}
                          onClick={() => addToCart(product.id, 1)}
                        >
                          Unidade
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                  {product.packValue && (
                    <Grid item xs={12}>
                      <Grid container spacing={1}>
                        <Grid item xs={6}>
                          <Typography variant="h6">
                            {toBRL(product.packValue)}
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Button
                            fullWidth
                            variant="contained"
                            className={classes.button}
                            onClick={() =>
                              addToCart(product.id, product.packSize)
                            }
                          >
                            Pack C/ {product.packSize}
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Container>
    </>
  );
}
