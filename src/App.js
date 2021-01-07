import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
/* import './App.css'; */
import './components/styles.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
  return (
  <BrowserRouter>
    <NavBar/>
    <main>
      <Switch>
        <Route path="/" exact>
          <ItemListContainer greeting="Bienvenidos a la tienda."/>
        </Route>
        <Route path="/category/:id" exact>
          <ItemListContainer greeting="Bienvenidos a la tienda."/>
        </Route>
        <Route path="/item/:id" exact>
          <ItemDetailContainer/>
        </Route>
      </Switch>
    </main>
  </BrowserRouter>)
} 
<main>

  </main>
export default App;
