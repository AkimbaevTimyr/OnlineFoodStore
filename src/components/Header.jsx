import React, { useContext } from 'react'
import order from '../store/order'
import { observer } from "mobx-react-lite";
import { Link } from 'react-router-dom';
import { Context } from '..';
import {toJS} from 'mobx'
const Header = observer(({setActive}) => {
    const {order} = useContext(Context)
    let count = order.totalCount;
    const items = toJS(order.orders)
    const totalCount = items.reduce((sum, item) => sum + item.count, 0)
    return (
        <div className="header-page">
            <div className="container header-page__container">
                <Link to="/">
                    <div className="header-page__start">
                        <div className="logo">
                            <div className="logo">
                                <img className="logo__img" src="./img/logo.svg" alt="logo" width="127" height="21"></img>
                            </div>
                        </div>
                    </div>
                </Link>
                <div className="header-page__end">
                    <nav className="header-page__nav">
                        <ul className="header-page__ul">
                            <li className="header-page__li">
                                <a href="#1" className="header-pahe__link">
                                    <span className="header-page__text">пицца</span>
                                </a>
                            </li>
                            <li className="header-page__li">
                                <a href="#2" className="header-pahe__link">
                                    <span className="header-page__text">о нас</span></a>
                            </li>
                        </ul>
                    </nav>
                        <div onClick={()=> setActive(true)} className="header__cart">
                            <div className="header__cart--basket vl">
                                Корзина {totalCount === 0 ? '' : totalCount}
                            </div>
                        </div>
                </div>
            </div>
        </div >
    )
})

export default Header