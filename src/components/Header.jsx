import React from 'react'
import order from '../store/order'
import { observer } from "mobx-react-lite";
import { Link } from 'react-router-dom';
const Header = observer(({setActive}) => {
    let count = order.totalCount
    return (
        <div class="header-page">
            <div class="container header-page__container">
                <Link to="/">
                    <div class="header-page__start">
                        <div class="logo">
                            <div class="logo">
                                <img class="logo__img" src="./img/logo.svg" alt="logo" width="127" height="21"></img>
                            </div>
                        </div>
                    </div>
                </Link>
                <div class="header-page__end">
                    <nav class="header-page__nav">
                        <ul class="header-page__ul">
                            <li class="header-page__li">
                                <a href="#1" class="header-pahe__link">
                                    <span class="header-page__text">пицца</span>
                                </a>
                            </li>
                            <li class="header-page__li">
                                <a href="#2" class="header-pahe__link">
                                    <span class="header-page__text">о нас</span></a>
                            </li>
                        </ul>
                    </nav>
                        <div onClick={()=> setActive(true)} className="header__cart">
                            <div className="header__cart--basket vl">
                                Корзина {count === 0 ? '' : count}
                            </div>
                        </div>
                </div>
            </div>

        </div >
    )
})

export default Header