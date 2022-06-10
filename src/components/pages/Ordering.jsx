import React from 'react';


const Ordering = () => {
    return(
        <div className='modal__content'>
            <h1>Куда доставить?</h1>
            <div className='modal__content_street'>
                <input placeholder='Квартира' />
                <input placeholder='Улица'/> 
            </div>
            <div className='modal_content-comment'>
                <input placeholder='Комментарий к заказу'/>
            </div>
            <span className='basket__button'>Заказать</span>
        </div>
    )
}

export default Ordering