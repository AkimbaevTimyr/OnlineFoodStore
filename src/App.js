import './App.css';
import Main from './components/pages/Main';
import axios from 'axios';
import React from 'react';
import pizzas from './store/pizzas';
const  App = () =>  {
  React.useEffect(()=>{
    axios.get('https://625e8d03873d6798e2a99e29.mockapi.io/pizzas').then(res => pizzas.setPizzas(res.data))
  },[])
  return (
    <div>
        <Main />
    </div>
  );
}

export default App;
