import './App.css';
import Main from './components/pages/Main';
import React, { useContext } from 'react';
import { getPizzas } from './http/getPizzas';
import { Context } from '.';
const  App = () =>  {
  const {pizzas} = useContext(Context)
  const {order} = useContext(Context)
  React.useEffect(()=>{
    getPizzas(1).then(data => pizzas.setPizzas(data))
  }, [])

  return (
    <div>
        <Main />
    </div>
  );
}

export default App;
