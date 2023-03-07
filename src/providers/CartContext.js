import React, { createContext, useEffect, useState } from "react";
import { data } from "../data/data";

export const CartContext = createContext({});

export function CartProvider(props) {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );
  const [products, setProducts] = useState();
  const [cartTotalSum, setCartTotalSum] = useState(0);
  const [cartItemsLength, setCartItemsLength] = useState(
    localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart")).length
      : 0
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function searchProducts() {
      setLoading(true);
      setProducts(data);
      setCartTotalSum(totalSum(data));
      return data;
    }
    searchProducts();
    setLoading(false);
  }, []);

  function updateCartTotalSum(cartItems) {
    console.log("teste", totalSum(products));
    setCartTotalSum(totalSum(products, cartItems));
  }

  function updateCartItemsLength() {
    setCartItemsLength(JSON.parse(localStorage.getItem("cart")).length);
  }

  function groupProductsOnCart(items, key) {
    return items.reduce((newArray, x) => {
      (newArray[x[key]] = newArray[x[key]] || []).push(x);
      return newArray;
    }, {});
  }

  function incremmentAmmountProduct(items) {
    const arrayTemp = Object.values(groupProductsOnCart(items, "product"));

    arrayTemp.map((item, index) => {
      let ammountTemp = 0;
      item.map((vetor) => {
        ammountTemp += vetor.ammount;
      });
      arrayTemp[index] = {
        product: arrayTemp[index][0].product,
        ammount: ammountTemp,
      };
    });

    return arrayTemp;
  }

  function totalSum(cloudProducts, assistantArray) {
    let total = 0;
    assistantArray
      ? assistantArray.forEach((item) => {
          console.log("itens a serem retornados", item);
          console.log("passei");
          total =
            total + item.ammount >=
            cloudProducts.find((product) => product.id == item.product).packSize
              ? Number(
                  (cloudProducts.find((product) => product.id == item.product)
                    .packValue /
                    cloudProducts.find((product) => product.id == item.product)
                      .packSize) *
                    item.ammount
                )
              : Number(
                  item.ammount *
                    cloudProducts.find((product) => product.id == item.product)
                      .price
                );
          console.log({ total });
        })
      : cartItems &&
        cartItems.forEach((item, index) => {
          console.log("itens a serem retornados", item);
          console.log("passei", index);
          console.log("total antes", total);
          total +=
            item.ammount >=
            cloudProducts.find((product) => product.id == item.product).packSize
              ? Number(
                  (cloudProducts.find((product) => product.id == item.product)
                    .packValue /
                    cloudProducts.find((product) => product.id == item.product)
                      .packSize) *
                    item.ammount
                )
              : Number(
                  item.ammount *
                    cloudProducts.find((product) => product.id == item.product)
                      .price
                );
          console.log({ total });
        });

    return total;
  }

  function handleAmmount(index, isIncremment) {
    if (localStorage.hasOwnProperty("cart")) {
      if (isIncremment) {
        cartItems[index].ammount++;
      } else {
        cartItems[index].ammount--;
      }
      localStorage.setItem("cart", JSON.stringify(cartItems));
      setCartItems((cartItems) => [...cartItems]);
      updateCartTotalSum();
    }
  }

  function deleteItem(index) {
    const itemsTemp = cartItems;

    itemsTemp.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(itemsTemp));

    setCartItems((itemsTemp) => [...itemsTemp]);
    updateCartTotalSum();
    updateCartItemsLength();
  }

  return (
    <CartContext.Provider
      value={{
        deleteItem,
        cartItems,
        setCartItems,
        handleAmmount,
        cartTotalSum,
        updateCartTotalSum,
        loading,
        products,
        incremmentAmmountProduct,
        cartItemsLength,
        setCartItemsLength,
        updateCartItemsLength,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
