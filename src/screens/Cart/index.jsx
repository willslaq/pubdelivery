import React from "react";

import CartList from "../../components/CartList";
import NavBar from "../../components/NavBar";

export default function Cart() {
  return (
    <>
      <NavBar />
      <div style={{ height: 100 }} />
      <CartList />
    </>
  );
}
