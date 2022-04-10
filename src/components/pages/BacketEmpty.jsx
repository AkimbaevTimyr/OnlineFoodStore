import React from 'react'


const BacketEmpty = ({active}) => {
    return (
        <div className='backet__empty'>
            <div className='backet__empty-content'>
                <img src='./img/backetEmpty.svg' className='backet__empty-img' />
                <h1>Ой, пусто!</h1>
                <p>
                    Ваша корзина пуста, откройте «Меню»
                    и выберите понравившийся товар.
                    Мы доставим ваш заказ от 3 000 тг.
                </p>
                <button onClick={ active} className="btn product__btn">Вернуться в меню</button>
            </div>
        </div>
    )
}


export default BacketEmpty