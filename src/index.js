import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import OrderStore from './store/order'
import PizzasStore from './store/pizzas'
import AuthStore from './store/auth';
import './index.css';
import App from './App';
export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    order: new OrderStore(),
    pizzas: new PizzasStore(),
    auth: new AuthStore()
  }}>
    <BrowserRouter basename='OnlineFoodStore'>
        <App />
    </BrowserRouter>
  </Context.Provider>,
  document.getElementById('root')
);
