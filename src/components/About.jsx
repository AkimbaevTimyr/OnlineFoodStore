import React from 'react'
const About = () => {
    return (
        <section id="2" className="section section-about">
            <img src={`${process.env.PUBLIC_URL}/img/bg.jpg.svg`} alt="" className="section-about__img" />
                <div className="container section-about__container">
                    <div className="section-about__content">
                        <h2 className="section__title section-about__title">О нас</h2>
                        <p className="section-about__text">Доставим вам горячую пиццу менее чем за час или пицца бесплатно.
                            Мы готовим пиццу только из свежих продуктов. Каждый день мы покупаем свежие овощи, грибы и мясо.</p>
                    </div>
                </div>
        </section>

    )
}

export default About;