import React from 'react'
import About from '../About'
import Catalog from '../Catalog'
import Header from '../Header'
import Modal from './Modal'
import {
    Routes,
    Route,
  } from "react-router-dom";


const Main = () => {
    const [activeModal, setActiveModal] = React.useState(false)
    return (
        <div>
            <Header setActive={setActiveModal} />
            <Routes>
                <Route exact path='/' element={ <Catalog />} />
            </Routes>
            <About />
            <Modal  activeModal={activeModal} setActive={()=> setActiveModal(false)}/>
        </div>
    )
}


export default Main