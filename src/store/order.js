import { makeAutoObservable } from "mobx"
import { toJS } from 'mobx'
class Order {
    totalCount = 0;
    orders = [];
    pizzas = 0
    constructor() {
        makeAutoObservable(this)
    }
    addOrder(order) {
        const data = toJS(this.orders).map(el => el.name).flat()
        if (data.includes(order.name)) {
            this.totalCount += 1
            toJS(this.orders).map((el, index) => (
                (el.name === order.name ? (this.orders[index].pizzaCount += 1) : '')
            ))
        } else {
            this.orders.push(order)
            this.totalCount += 1
        }
    }
    deleteOrder(id, counts) {
        this.orders = this.orders.filter((el) => el.id !== id)
        this.totalCount = this.totalCount - counts;
    }
    cancel() {
        this.orders = [];
        this.totalCount = 0;
    }
    minus = (name) => {
        this.totalCount -= 1;
        toJS(this.orders).map((el, index) => (
            el.name === name ? (this.orders[index].pizzaCount -= 1) : ''
        ))
    }
    plus = (name) => {
        this.totalCount += 1
        toJS(this.orders).map((el, index) => (
            el.name === name ? (this.orders[index].pizzaCount += 1) : ''
        ))
    }

}


export default new Order;








