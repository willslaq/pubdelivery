  
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from './screens/Cart';

import Products from './screens/Products';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}