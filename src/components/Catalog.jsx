import React from 'react'
import pizzas from '../store/pizzas';
import { toJS } from "mobx";
import CatalogItem from './CatalogItem';
import Menu from './Menu';
import { observer } from "mobx-react-lite";
import order from '../store/order';
const Catalog = observer(() => {
    const [count, setCount] = React.useState(0);
    const obj = toJS(pizzas).pizzas
    const [currentSize, setCurrentSize ] = React.useState(35)
    const handleClick = (pizza) =>{
       setCount(count +1)
       const obj = {
           id: pizza.id,
           imageUrl: pizza.imageUrl,
           name: pizza.name,
           price: pizza.price,
           sizes: currentSize,
           pizzaCount: 1
       }
       order.addOrder(obj)
    }
    return (
        <div id="1" class="section-catalog">
            <div class="container">
                <Menu />
                <div class="catalog">
                    {obj.map((el, index) => (
                        <div key={index} class="catalog__item">
                            <div class="product catalog__product">
                                <img src={el.imageUrl} alt="" class="product__img" width="310px" height="300px" />
                                <div class="product__content">
                                    <h3 class="product__title">{el.name}</h3>
                                </div>
                                <footer class="product__footer">
                                    <CatalogItem click={setCurrentSize}/>
                                    <div class="product__bottom">
                                        <div class="product__price">
                                            <span class="product__price-value">{el.price} тнг</span>
                                        </div>
                                        <button onClick={()=> handleClick(el)} class="btn product__btn" type="button">заказать</button>
                                    </div>
                                </footer>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
})


export default Catalog;