import './App.css';
import Main from './components/pages/Main';
import axios from 'axios';
import React from 'react';
import pizzas from './store/pizzas';
const  App = () =>  {
  React.useEffect(()=>{
    axios.get('http://localhost:3001/').then(res => pizzas.setPizzas(res.data))
  },[])
  return (
    <div>
        <Main />
    </div>
  );
}

export default App;
