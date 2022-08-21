import { makeAutoObservable } from "mobx"
import { plusOrder } from "../http/addOrders";
import { deletePizza, minusOrder } from "../http/deleteOrders";

export default class OrderStore {
    constructor() {
        this._orders = [];
        makeAutoObservable(this)
    }
    get orders() {
        return this._orders
    }
    setOrders(orders){
        this._orders = orders
    }
    setOrder(order) {
        const findItem = this._orders.find((el) => el.id === order.id);
        if(findItem){
            findItem.count++;
        }else{
            this._orders.push(order);
        }
    }

    setPlus(email, name){
        const findItem = this._orders.find((el) => el.name === name);
        plusOrder(email, name)
        findItem.count++;
    }
    setMinus(email, name){
        const findItem = this._orders.find((el) => el.name === name);
        minusOrder(email, name)
        findItem.count--;
    }
    setModalOrder(text){
        if(text === 'cancel'){
            alert('Заказ отменен')
            this._orders = []
        }else{
            alert('Заказ принят')
            this._orders = []
        }
    }
    removeItem(email, name){
        this._orders = this._orders.filter(item => item.name != name)
        deletePizza(email, name)
    }
    setFilter(category){
        this._orders = this._orders.filter((el) => el.category === category)
    }
}






