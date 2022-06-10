import React, { useContext, useState } from "react";
import Login from "../Login";
import Registration from "../Registration";
import { useLocation } from 'react-router-dom'

const Auth = () => {
    const location = useLocation()
    const isLogin  = location.pathname === '/login'
    return (
        <div>
            {isLogin === true ? <Login isLogin={isLogin} /> : <Registration isLogin={isLogin} />}
        </div>
    )
}

export default Auth;