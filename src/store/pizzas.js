import { makeAutoObservable } from "mobx"

export default class PizzasStore {
    constructor() {
        this._pizzas = []
        makeAutoObservable(this)
    }

    get pizzas(){
        return this._pizzas
    }

    setPizzas(pizzas){
        console.log(pizzas)
        this._pizzas = pizzas
    }
}





