import React, { useContext, useState } from "react";
import { authentication } from '../firebase-config';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Context } from "../";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const Login = () =>{
    const {auth} = useContext(Context)
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()
    let navigate = useNavigate()
    const login = () => {
        signInWithEmailAndPassword(authentication, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          auth.setIsAuth(true)
          navigate('/')
          auth.setUserEmail(user.email)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorCode)
          console.log(errorMessage)
        });
    }
    
    return(
        <div className="form">
        <h1>Войти</h1>
        <p>Подарим подарок на день рождения, сохраним адрес доставки и расскажем об акциях</p>
        <input onChange={e => setEmail(e.target.value)} placeholder="email" /><br/>
        <input onChange={e => setPassword(e.target.value)} placeholder="password" /><br />
        <p>Нет аккаунта ? <Link to='/registration'>Зарегистрируйтесь</Link></p>
        <span className="basket__button" onClick={()=> login()}>Войти</span>
    </div>
    )
}

export default Login;