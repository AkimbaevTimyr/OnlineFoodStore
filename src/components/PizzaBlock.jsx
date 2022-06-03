import React, { useContext } from 'react'
import { observer } from "mobx-react-lite";
import { Context } from '..';
const PizzaBlock = observer(({imageUrl, price, name, id}) => {
    const {order} = useContext(Context)
    const type = [35, 30, 25]
    const [activeType, setActiveType] = React.useState(0)
    const setSize = (index) => {
        setActiveType(index)
    }
    const handleClick = (index) => {
        const obj = {
            id,
            imageUrl,
            name,
            price,
            sizes: type[activeType],
            count: 1
        }
        order.setOrder(obj)
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