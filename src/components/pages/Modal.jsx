import React, { useContext, useState } from 'react'
import { toJS } from 'mobx'
import { observer } from "mobx-react-lite";
import BacketEmpty from './BacketEmpty';
import CartItem from '../CartItem';
import { Context } from '../..';
import Ordering from './Ordering';
import { collection, getDocs } from "firebase/firestore"; 

const Modal = observer(({ activeModal, setActive }) => {
    const [orderingVisible, setOrderingVisible] = useState(false)
    const {order} = useContext(Context)
    const obj = order.orders
    const items = toJS(order.orders)
    const totalPrice = items.reduce((sum, item)=> sum + (item.count * item.price), 0)
    const totalCount = items.reduce((sum, item) => sum + item.count, 0)
    const cancel = (text) =>{
        order.setModalOrder(text)
    }
    const ord = (text) =>{
        order.setModalOrder(text)
        setOrderingVisible(true)
    }

    
    return (
        <div className={activeModal ? 'modal active' : 'modal'} onClick={setActive}>
            {orderingVisible === false ? (<div className="modal__content" onClick={e => e.stopPropagation()}>
                {totalPrice === 0 ? (<BacketEmpty active={setActive} />) : (<div className='modal__content-header'>
                {totalCount} товара на {totalPrice} тенге
                    {obj.map((el, index) => (
                        el.pizzaCount === 0 ? '' : (<div key={index}>
                            <CartItem id={el.id} imageUrl={el.imageUrl} name={el.name} sizes={el.sizes} count={el.count} price={el.price} />
                        </div>)
                    ))}
                    <div className='basket_footer-button'>
                        <span onClick={() =>cancel('cancel') } className='basket__button'>
                            Отменить
                        </span>
                        <span onClick={()=> ord('order')} className='basket__button'>
                            Заказать
                        </span>
                    </div>
                </div>
                )}
            </div>) : < Ordering />} 
        </div>
    )
})
export default Modal




 {/* <div onClick={setActive} className="img">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M9.61 12.199L.54 3.129A1.833 1.833 0 113.13.536l9.07 9.07L21.27.54a1.833 1.833 0 012.592 2.592l-9.068 9.068 9.07 9.07a1.833 1.833 0 01-2.59 2.592l-9.072-9.07-9.073 9.073a1.833 1.833 0 01-2.591-2.592L9.61 12.2z" fill="#fff"></path></svg>
                    </div> */}