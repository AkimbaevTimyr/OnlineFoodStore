import React from 'react'
import About from '../About'
import Catalog from '../Catalog'
import Header from '../Header'
import Modal from './Modal'



const Main = () => {
    const paginate = [1, 2, 3, 4, 5]
    const [activeModal, setActiveModal] = React.useState(false)
    return (
        <div>
            <Header setActive={setActiveModal} />
            <Catalog />
            <About />
            <Modal  activeModal={activeModal} setActive={()=> setActiveModal(false)}/>
            
        </div>
    )
}


export default Main