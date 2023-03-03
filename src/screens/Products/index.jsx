import React from 'react';
import NavBar from '../../components/NavBar';
import ProductList from '../../components/ProductsList';

export default function Products() {
  return (
    <>
      <NavBar />
      <div style={{height: 100}}></div>
      <ProductList />
    </>
  )
}