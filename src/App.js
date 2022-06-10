import './App.css';
import Main from './components/pages/Main';
import React, { useContext } from 'react';
import { getPizzas } from './http/getPizzas';
import { Context } from '.';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login';
import Registration from './components/Registration';
const  App = () =>  {
  const {pizzas} = useContext(Context)
  const {auth} = useContext(Context)
  React.useEffect(()=>{
    getPizzas().then(data => pizzas.setPizzas(data))
  }, [])

  return (
    <Routes>
      <Route path='/main' element={<Main />} />
      <Route path='/' element={<Login />} />
      <Route path='/registration' element={<Registration />} />
    </Routes>
  );
}

export default App;
