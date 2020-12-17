import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => <>
  <NavBar/>
  <ItemListContainer greeting = "Bienvenidos a la tienda."/>
  </>;

export default App;
