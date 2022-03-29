import React from 'react'
const About = () => {
    return (
        <section id="2" class="section section-about">
            <img src={`${process.env.PUBLIC_URL}/img/bg.jpg.svg`} alt="" class="section-about__img" />
                <div class="container section-about__container">
                    <div class="section-about__content">
                        <h2 class="section__title section-about__title">О нас</h2>
                        <p class="section-about__text">Доставим вам горячую пиццу менее чем за час или пицца бесплатно.
                            Мы готовим пиццу только из свежих продуктов. Каждый день мы покупаем свежие овощи, грибы и мясо.</p>
                    </div>
                </div>
        </section>

    )
}

export default About;