import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import ItemListContainer from '../containers/ItemListContainer';
import ItemDetailContainer from '../containers/ItemDetailContainer';
import Cart from '../views/Cart';
import CartProvider from '../../CartContext';
import CheckoutContainer from '../containers/CheckoutContainer';
import Footer from './Footer';

const App = () => {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route path="/" exact>
              <ItemListContainer/>
            </Route>
            <Route path="/category/:id">
              <ItemListContainer/>
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer/>
            </Route>
            <Route path="/cart">
              <Cart/>
            </Route>
            <Route path="/checkout">
              <CheckoutContainer/>
            </Route>
          </Switch>
        </BrowserRouter>
      </CartProvider>
      <Footer/>
    </>
  )
}

export default App;
