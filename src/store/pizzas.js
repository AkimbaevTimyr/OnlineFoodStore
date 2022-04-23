import { makeAutoObservable } from "mobx"
import { toJS } from "mobx";
class Pizzas {
    pizzas = []
    localPizzas = []
    constructor() {
        makeAutoObservable(this)
    }
    returnPizzas() {
        return this.localPizzas
    }

    filter(id) {
        this.pizzas = this.returnPizzas();
        if (id === 0) {
            this.pizzas = this.returnPizzas();
        } else {
            this.pizzas = toJS(this.pizzas).filter(el => Number(el.category) === id)
        }
    }
    setPizzas(obj) {
        for (let i = 0; i <= obj.length - 1; i++) {
            this.pizzas.push(obj[i])
            this.localPizzas.push(obj[i])
        }
    }
}

export default new Pizzas;




