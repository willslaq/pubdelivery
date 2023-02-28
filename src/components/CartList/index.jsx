import {
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useContext } from "react";

import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { CartContext } from "../../providers/CartContext";
import toBRL from "../../tools/toBRL";

const useStyles = makeStyles((theme) => ({
  cartItemPaper: {
    marginBottom: 5,
    padding: 10,
    backgroundColor: "var(--soft)",
    color: "var(--text)",
  },
  imageControl: {
    width: "100%",
    borderRadius: "4px",
  },
  controlCartItemBody: {
    paddingLeft: 10,
  },
  deleteIconControl: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headersFontSizeReset: {
    fontSize: "0.8rem",
  },
  increment: {
    transform: "scale(0.8)",
    textAlign: "center",
    color: "var(--secondary)",
    padding: 0,
  },
  decrement: {
    transform: "scale(0.8)",
    textAlign: "center",
    color: "var(--secondary)",
    padding: 0,
  },
  ammountCount: {
    alignSelf: "center",
  },
  resumeWrapper: {
    paddingBottom: 10,
  },
}));

export default function CartList(props) {
  const classes = useStyles();
  const { deleteItem, products, cartItems, handleAmmount, cartTotalSum } =
    useContext(CartContext);

  function finishOrder() {
    let phone = "5544998418738";
    let test = JSON.parse(localStorage.getItem("cart"));
    console.log("teste", test);
    let text = "Pedido: \n";
    test.map(
      (item) =>
        (text += `Código: ${item.product}, Produto: ${products
          .find((product) => product.id == item.product)
          .description.toLowerCase()}, Quantidade: ${item.ammount}
          -------------------
          `)
    );

    console.log("text", text);

    window.open(
      `https://api.whatsapp.com/send?phone=${phone}&text=${window.encodeURIComponent(
        text
      )}`
    );
  }

  return (
    <>
      <Container maxWidth="sm" style={{ paddingTop: 10 }}>
        {products && (
          <Grid container>
            {cartItems.map((item, index) => (
              <Grid item xs={12} align="left">
                <Paper className={classes.cartItemPaper}>
                  <Grid container spacing={1}>
                    <Grid item xs={10} className={classes.controlCartItemBody}>
                      <Grid container spacing={1}>
                        <Grid item xs={12}>
                          <Typography
                            variant="h6"
                            color="secondary"
                            style={{ textTransform: "capitalize" }}
                          >
                            {products
                              .find((product) => product.id == item.product)
                              .description.toLowerCase()}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Grid container spacing={2}>
                            <Grid item xs={4}>
                              <Grid container>
                                <Grid item xs={12}>
                                  <Typography
                                    className={classes.headersFontSizeReset}
                                  >
                                    Quantidade
                                  </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                  <div className={classes.ammount}>
                                    <Grid container>
                                      <Grid item xs={4}>
                                        <IconButton
                                          className={classes.decrement}
                                          onClick={() =>
                                            item.ammount != 1 &&
                                            handleAmmount(index, false)
                                          }
                                        >
                                          <RemoveIcon />
                                        </IconButton>
                                      </Grid>
                                      <Grid
                                        item
                                        xs={4}
                                        className={classes.ammountCount}
                                      >
                                        <Typography align="center">
                                          {item.ammount}
                                        </Typography>
                                      </Grid>
                                      <Grid item xs={4}>
                                        <IconButton
                                          className={classes.increment}
                                          onClick={() =>
                                            handleAmmount(index, true)
                                          }
                                        >
                                          <AddIcon />
                                        </IconButton>
                                      </Grid>
                                    </Grid>
                                  </div>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={4}>
                              <Grid container>
                                <Grid item xs={12}>
                                  <Typography
                                    className={classes.headersFontSizeReset}
                                  >
                                    Preço Unitário
                                  </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                  {toBRL(
                                    products.find(
                                      (product) => product.id == item.product
                                    ).price
                                  )}
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={4}>
                              <Grid container>
                                <Grid item xs={12}>
                                  <Typography
                                    className={classes.headersFontSizeReset}
                                  >
                                    Total
                                  </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                  {item.ammount >=
                                  products.find(
                                    (product) => product.id == item.product
                                  ).packSize
                                    ? toBRL(
                                        Number(
                                          (products.find(
                                            (product) =>
                                              product.id == item.product
                                          ).packValue /
                                            products.find(
                                              (product) =>
                                                product.id == item.product
                                            ).packSize) *
                                            item.ammount
                                        )
                                      )
                                    : toBRL(
                                        Number(
                                          item.ammount *
                                            products.find(
                                              (product) =>
                                                product.id == item.product
                                            ).price
                                        )
                                      )}
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={2} className={classes.deleteIconControl}>
                      <IconButton onClick={() => deleteItem(index)}>
                        <DeleteIcon color="secondary" />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            ))}
            <Grid item xs={12}>
              <Divider />
              <Typography>
                <div className={classes.resumeWrapper}>
                  <Grid container align="left">
                    <Grid item xs={12}>
                      <Typography variant="h6" color="secondary">
                        Resumo
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>Total</Typography>
                    </Grid>
                    <Grid item xs={6} align="right">
                      <Typography>{toBRL(cartTotalSum)}</Typography>
                    </Grid>
                  </Grid>
                </div>
              </Typography>
            </Grid>
          </Grid>
        )}
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={() => finishOrder()}
        >
          Finalizar Pedido
        </Button>
      </Container>
    </>
  );
}
