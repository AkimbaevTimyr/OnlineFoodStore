import React from 'react'
const CatalogItem = ({click}) =>{
    const [activeType, setActiveType] = React.useState(0)
    const type = [35, 30, 25]
    const setSize = (index) =>{
        setActiveType(index)
        click(type[index])
    }
    return(
    <div class="product__sizes">
       {type.map((el, index) => (
        <div type={el} key={index} onClick={() => setSize(index)} className={activeType === index ? 'product__size_is_active' : 'product__size'}>{el}</div>
        ))}
    </div>
    )
}

export default CatalogItem