import React, { useContext } from 'react'
import Menu from './Menu';
import { observer } from "mobx-react-lite";
import PizzaBlock from './PizzaBlock';
import { Context } from '..';
const Catalog = observer(() => {
    const {pizzas} = useContext(Context)
    const obj = pizzas.pizzas;
    return (
        <div id="1" className="section-catalog">
            <div className="container">
                <Menu />
                <div className="catalog">
                    {(obj.map((el, index) => (
                        <PizzaBlock key={index} id={el.id} imageUrl={el.imageUrl} name={el.name} price={el.price} />
                    )))}
                </div>
            </div>
        </div>
    )
})


export default Catalog;