import React from 'react';
import ReactDOM from 'react-dom';
import App from './ui/layout/App';
//Los estilos acá llegan a todo el sitio
import './styles.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);