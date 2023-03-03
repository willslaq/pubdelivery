import React, { useContext } from "react";
import { Button, Container, Grid, GridListTile, IconButton, Paper, Typography } from "@material-ui/core";

import { useStyles } from "./styles";
import toBRL from "../../tools/toBRL";
import { data } from "../../data/data";
import sashimi from "../../assets/salmao.jpg";
import uramaki from "../../assets/uramaki.jpg";
import temaki from "../../assets/temaki.png";
import hossomaki from "../../assets/hossomaki.jpg";
import hotsushi from "../../assets/hotsushi.png";
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
    let phone = "5544998418738";
    let text = "Gostaria de fazer um pedido.";
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
          (44) 9 9841 - 8738
        </IconButton>
        
<div style={{height: 30}}></div>

        <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
          <div >
          <img src={sashimi} alt="Sashimi" style={{backgroundColor: "#FFF", width: 200, borderRadius: 20}} />
          </div>
        <Typography gutterBottom variant="h4" color="secondary">
          Sashimi:
        </Typography>
        </div>
        {data.filter(product => product.productType == "sashimi").map((product) => (
          <>
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
                            {product?.packQuantity} Unidades
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
                              {product?.packQuantity * 2} unidades
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </>
        ))}

<div style={{height: 30}}></div>

        <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
          <div >
          <img src={uramaki} alt="Uramaki" style={{backgroundColor: "#FFF", width: 200, borderRadius: 20}} />
          </div>
        <Typography gutterBottom variant="h4" color="secondary">
          Uramaki:
        </Typography>
        </div>
        {data.filter(product => product.productType == "uramaki").map((product) => (
          <>
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
                            {product?.packQuantity} Unidades
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
                              {product?.packQuantity * 2} unidades
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </>
        ))}

<div style={{height: 30}}></div>

        <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
          <div >
          <img src={temaki} alt="Temaki" style={{backgroundColor: "#000", width: 200, borderRadius: 20}} />
          </div>
        <Typography gutterBottom variant="h4" color="secondary">
          Temaki:
        </Typography>
        </div>
        {data.filter(product => product.productType == "temaki").map((product) => (
          <>
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
                            {product?.packQuantity} Unidades
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
                              {product?.packQuantity * 2} unidades
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </>
        ))}

<div style={{height: 30}}></div>

        <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
          <div >
          <img src={hossomaki} alt="Hossomaki" style={{backgroundColor: "#000", width: 200, borderRadius: 20}} />
          </div>
        <Typography gutterBottom variant="h4" color="secondary">
        Hossomaki:
        </Typography>
        </div>
        {data.filter(product => product.productType == "hossomaki").map((product) => (
          <>
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
                            {product?.packQuantity} Unidades
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
                              {product?.packQuantity * 2} unidades
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </>
        ))}

<div style={{height: 30}}></div>

        <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
          <div >
          <img src={hotsushi} alt="Hot Sushi" style={{backgroundColor: "#000", width: 200, borderRadius: 20}} />
          </div>
        <Typography gutterBottom variant="h4" color="secondary">
        Hot Sushi:
        </Typography>
        </div>
        {data.filter(product => product.productType == "hotsushi").map((product) => (
          <>
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
                            {product?.packQuantity} Unidades
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
                              {product?.packQuantity * 2} unidades
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </>
        ))}

<div style={{height: 30}}></div>

        <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
        <Typography gutterBottom variant="h4" color="secondary">
          Combos:
        </Typography>
        </div>
        {data.filter(product => product.productType == "combo").map((product) => (
          <>
            <Paper className={classes.productCard}>
              <Grid container spacing={1}>
                <Grid item xs={6} className={classes.alignItems} style={{flexDirection: "column"}}>
                  <Typography variant="h6">{product.description}</Typography>
                  {product.comboItems?.map((item) => (
                    <Typography variant="h6">{` - ${item.quantity} ${item.description}`}</Typography>
                  ))}
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
                            {product?.packQuantity} Unidades
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
                              {product?.packQuantity * 2} unidades
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </>
        ))}


<div style={{height: 30}}></div>

<div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
<Typography gutterBottom variant="h4" color="secondary">
Adicionais:
</Typography>
</div>
{data.filter(product => product.productType == "adicionais").map((product) => (
  <>
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
                    {product?.packQuantity} Unidades
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
                      {product?.packQuantity * 2} unidades
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  </>
))}

<div style={{height: 30}}></div>

<div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
<Typography gutterBottom variant="h4" color="secondary">
Bebidas:
</Typography>
</div>
{data.filter(product => product.productType == "bebidas").map((product) => (
  <>
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
                    {product?.packQuantity} Unidades
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
                      {product?.packQuantity * 2} unidades
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  </>
))}


      </Container>
    </>
  );
}
