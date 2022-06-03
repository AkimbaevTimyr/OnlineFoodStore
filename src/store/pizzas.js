import { makeAutoObservable } from "mobx"

export default class PizzasStore {
    constructor() {
        this._pizzas = []
        this._returnPizzas = []
        makeAutoObservable(this)
    }

    get pizzas(){
        return this._pizzas
    }

    setPizzas(pizzas){
        this._pizzas = pizzas
        this._returnPizzas = pizzas
    }
}





