import { makeAutoObservable } from "mobx"

export default class AuthStore{
    constructor() {
        this._isAuth = false;
        this._userEmail = '';
        makeAutoObservable(this)
    }

    setIsAuth (bool){
        this._isAuth = bool
        console.log(this._isAuth)
    }

    get isAuth(){
        return this._isAuth
    }
    setUserEmail(email){
        this._userEmail = email
    }

    get userEmail(){
        return this._userEmail
    }

}


