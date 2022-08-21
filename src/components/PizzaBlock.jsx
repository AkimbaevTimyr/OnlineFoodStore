import React, { useContext } from 'react'
import { observer } from "mobx-react-lite";
import { Context } from '..';
import { addOrder } from '../http/addOrders';
import { getOrders } from '../http/getOrders';
const PizzaBlock = observer(({imageUrl, price, name, id}) => {
    const {order, auth} = useContext(Context)
    const type = [35, 30, 25]
    const [activeType, setActiveType] = React.useState(0)
    const setSize = (index) => {
        setActiveType(index)
    }
    const handleClick = async() => {
        const obj = {
            imageUrl,
            name,
            price,
            size: type[activeType],
            count: 1,
            userEmail: auth.userEmail
        }
        await addOrder(auth.userEmail, obj)
        await getOrders(auth.userEmail).then(data => order.setOrders(data))
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