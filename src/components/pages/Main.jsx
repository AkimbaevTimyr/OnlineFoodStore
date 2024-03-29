import React from 'react'
import About from '../About'
import Catalog from '../Catalog'
import Header from '../Header'
import Modal from './Modal'


const Main = () => {
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