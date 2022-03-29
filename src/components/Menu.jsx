import React from 'react'
import pizzas from '../store/pizzas'


const Menu = () =>{
    const catalog = ['все', 'грибные', 'мясные', 'сырные']

    const [cat, setCat] = React.useState(0)
    const setPosition = (index) => {
        setCat(index)
        setActive(!active)
        pizzas.filter(index)
    }
    const [active, setActive] = React.useState(false)

    return(
        <header class="section-header">
                    <h2 class="secton-title section-title--accent">Меню</h2>
                    <nav class="catalog-nav">
                        <ul class="catalog-nav___wrapper">
                            {catalog.map((el, index) => (
                                <li key={index} onClick={() => setPosition(index)} class={index === cat ? 'catalog-nav_button_active' : "catalog-nav_button"}>
                                    {el}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </header>
    )
}

export default Menu;