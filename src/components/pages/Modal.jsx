import React, { useContext} from 'react'
import { observer } from "mobx-react-lite";
import BacketEmpty from './BacketEmpty';
import CartItem from '../CartItem';
import { Context } from '../..';
import { cancelOrders } from '../../http/deleteOrders';
import { useTotalPriceCount } from '../../hooks/totalCountPrice';

const Modal = observer(({ activeModal, setActive }) => {
    const {auth, order} = useContext(Context)
    const {totalPrice, totalCount} = useTotalPriceCount(order)
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
                    {order.orders.map((el, index) => (
                        el.count === 0 ? '' : (<div key={index}>
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




