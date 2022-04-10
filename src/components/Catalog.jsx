import React from 'react'
import pizzas from '../store/pizzas';
import { toJS } from "mobx";
import Menu from './Menu';
import { observer } from "mobx-react-lite";
import PizzaBlock from './PizzaBlock';
const Catalog = observer(() => {
    const obj = toJS(pizzas).pizzas
    return (
        <div id="1" className="section-catalog">
            <div className="container">
                <Menu />
                <div className="catalog">
                    {obj.map((el, index) => (
                        <PizzaBlock key={index} id={el._id} imageUrl={el.imageUrl} name={el.name} price={el.price} />
                    ))}
                </div>
            </div>
        </div>
    )
})


export default Catalog;