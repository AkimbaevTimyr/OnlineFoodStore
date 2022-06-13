import React, {  useState } from "react";
import { authentication } from '../firebase-config';
import { createUserWithEmailAndPassword} from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const Registration = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()
    let navigate = useNavigate()
    const registration = () => {
        createUserWithEmailAndPassword(authentication, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode)
                console.log(errorMessage)
            });
    }
    return (
        <div className="form">
            <h1>Зарегистрироваться</h1>
            <p>Подарим подарок на день рождения, сохраним адрес доставки и расскажем об акциях</p>
            <input onChange={e => setEmail(e.target.value)} placeholder="email" /><br />
            <input onChange={e => setPassword(e.target.value)}type="password" placeholder="password" /><br />
            <p>Есть аккаунт? <Link to="/">Войдите</Link></p>
            <span className="basket__button" onClick={() => registration()}>Зарегистрироваться</span>
        </div>
    )
}

export default Registration