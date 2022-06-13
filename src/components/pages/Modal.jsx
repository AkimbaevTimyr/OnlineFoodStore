import React, { useContext} from 'react'
import { toJS } from 'mobx'
import { observer } from "mobx-react-lite";
import BacketEmpty from './BacketEmpty';
import CartItem from '../CartItem';
import { Context } from '../..';
import { cancelOrders, getOrders} from '../../http/getOrders';
import { useEffect } from 'react';

const Modal = observer(({ activeModal, setActive }) => {
    const {auth} = useContext(Context)
    const {order} = useContext(Context)
    useEffect(()=>{
        getOrders(auth.userEmail).then(data => order.setOrders(data))
    },[])
    const obj = order.orders
    const items = toJS(order.orders)
    const totalPrice = items.reduce((sum, item)=> sum + (item.count * item.price), 0)
    const totalCount = items.reduce((sum, item) => sum + item.count, 0)
    const cancel = (text) =>{
        order.setModalOrder(text)
        cancelOrders(auth.userEmail)
    }
    const ord = (text) =>{
        order.setModalOrder(text)
        cancelOrders(auth.userEmail)
    }

    return (
        <div className={activeModal ? 'modal active' : 'modal'} onClick={setActive}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                {totalPrice === 0 ? (<BacketEmpty active={setActive} />) : (<div className='modal__content-header'>
                {totalCount} товара на {totalPrice} тенге
                    {obj.map((el, index) => (
                        el.pizzaCount === 0 ? '' : (<div key={index}>
                            <CartItem id={el.id} imageUrl={el.imageUrl} name={el.name} size={el.size} count={el.count} price={el.price} />
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
            </div>
        </div>
    )
})
export default Modal




