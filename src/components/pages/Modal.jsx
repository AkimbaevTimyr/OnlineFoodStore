import React from 'react'
import order from '../../store/order'
import { toJS } from 'mobx'
import { observer } from "mobx-react-lite";
import BacketEmpty from './BacketEmpty';
import { useCart } from '../hooks/useCart';
const Modal = observer(({ activeModal, setActive }) => {
    const { totalPrice } = useCart()
    const obj = toJS(order).orders
    let count = order.totalCount
    return (
        <div  className={activeModal ? 'modal active' : 'modal'} onClick={setActive}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                {totalPrice === 0 ? (<BacketEmpty active={setActive} />) : (<div className='modal__content-header'>
                    {count} товара на {totalPrice} тенге
                    {obj.map((el, index) => (
                        el.pizzaCount === 0 ? '' : (<div key={index}>
                            <div key={index} className="cart__item">
                                <div className="cart__item-img">
                                    <img
                                        className="pizza-block__image"
                                        src={el.imageUrl}
                                        alt="Pizza"
                                    />
                                </div>
                                <div className="cart__item-info">
                                    <h3>{el.name}</h3>
                                    <p style={{ marginTop: '-15px' }}>классическое тесто, {el.sizes} см.</p>
                                </div>
                                <div className="cart__item-count">
                                    <div onClick={() => order.minus(el.name)} className="button cart__item-count-minus">
                                        <svg

                                            width="10"
                                            height="10"
                                            viewBox="0 0 10 10"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                                                fill="#EB5A1E"
                                            />
                                            <path
                                                d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                                                fill="#EB5A1E"
                                            />
                                        </svg>
                                    </div>
                                    <b>{el.pizzaCount}</b>
                                    <div onClick={() => order.plus(el.name)} className="button cart__item-plus">
                                        <div className="">
                                            <svg
                                                width="10"
                                                height="10"
                                                viewBox="0 0 10 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className='svg-plus'
                                            >
                                                <path
                                                    d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                                                    fill="#EB5A1E"
                                                />
                                                <path
                                                    d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                                                    fill="#EB5A1E"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart__item-price">
                                    <b>{el.price} тнг</b>
                                </div>
                                <div onClick={() => order.deleteOrder(el.id, el.pizzaCount)} className="cart__item-remove">
                                    <div className="button button--outline button--circle">
                                        <svg
                                            width="10"
                                            height="10"
                                            viewBox="0 0 10 10"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                                                fill="#EB5A1E"
                                            />
                                            <path
                                                d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                                                fill="#EB5A1E"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    ))}
                    <div className='basket_footer-button'>
                        <span onClick={() => order.cancel()} className='basket__button'>
                            Отменить
                        </span>
                        <span className='basket__button'>
                            Заказать
                        </span>
                    </div>
                    <div onClick={setActive} className="img">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M9.61 12.199L.54 3.129A1.833 1.833 0 113.13.536l9.07 9.07L21.27.54a1.833 1.833 0 012.592 2.592l-9.068 9.068 9.07 9.07a1.833 1.833 0 01-2.59 2.592l-9.072-9.07-9.073 9.073a1.833 1.833 0 01-2.591-2.592L9.61 12.2z" fill="#fff"></path></svg>
                    </div>
                </div>
                )}

            </div>
        </div>
    )
})
export default Modal




