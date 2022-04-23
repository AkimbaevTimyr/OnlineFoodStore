import React from 'react'
import pizzas from '../store/pizzas'
import { observer } from "mobx-react-lite";
const Menu = observer(() => {
    const catalog = ['все', 'грибные', 'мясные', 'сырные']
    const [cat, setCat] = React.useState(0)
    const setPosition = (index) => {
        setCat(index)
        setActive(!active)
        pizzas.filter(index)
    }
    const [active, setActive] = React.useState(false)
    return (
        <header className="section-header">
            <h2 className="secton-title section-title--accent">Меню</h2>
            <nav className="catalog-nav">
                <ul className="catalog-nav___wrapper">
                    {catalog.map((el, index) => (
                        <li onClick={() => setPosition(index)} className={index === cat ? 'catalog-nav_button_active' : "catalog-nav_button"} key={index} >
                            {el}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
})
export default Menu;