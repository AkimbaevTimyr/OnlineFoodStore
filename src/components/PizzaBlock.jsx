import React from 'react'
import { observer } from "mobx-react-lite";
import order from '../store/order';
const PizzaBlock = observer(({imageUrl, price, name, id}) => {
    const [count, setCount] = React.useState(0);
    const type = [35, 30, 25]
    const [activeType, setActiveType] = React.useState(0)
    const setSize = (index) => {
        setActiveType(index)
    }
    const handleClick = (index) => {
        setCount(count + 1)
        const obj = {
            id,
            imageUrl,
            name,
            price,
            sizes: type[activeType],
            pizzaCount: 1
        }
        order.addOrder(obj, type[activeType])
    }
    return (
        <div className="catalog__item">
            <div className="product">
                <img src={imageUrl} alt="" className="product__img" width="310px" height="300px" />
                <div className="product__content">
                    <h3 className="product__title">{name}</h3>
                </div>
                <footer className="product__footer">
                    <div className="product__sizes">
                        {type.map((el, index) => (
                            <div key={index} onClick={() => setSize(index)} className={activeType === index ? 'product__size_is_active' : 'product__size'}>{el}</div>
                        ))}
                    </div>
                    <div className="product__bottom">
                        <div className="product__price">
                            <span className="product__price-value">{price} тнг</span>
                        </div>
                        <button onClick={() => handleClick()} className="btn product__btn" type="button">заказать</button>
                    </div>
                </footer>
            </div>
        </div>
    )
})
export default PizzaBlock;