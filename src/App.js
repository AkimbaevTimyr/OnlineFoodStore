import './App.css';
import Main from './components/pages/Main';
import React from 'react';
import pizzas from './store/pizzas';
import data from './store/data';
const  App = () =>  {
  React.useEffect(()=>{
    pizzas.setPizzas(data)
  })
  return (
    <div>
        <Main />
    </div>
  );
}

export default App;
