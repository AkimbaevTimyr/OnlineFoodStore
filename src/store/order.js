import { makeAutoObservable } from "mobx"

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

    setPlus(name){
        const findItem = this._orders.find((el) => el.name === name);
        findItem.count++;
    }
    setMinus(name){
        const findItem = this._orders.find((el) => el.name === name);
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
    removeItem(name){
        this._orders = this._orders.filter(item => item.name != name)
    }
    setFilter(category){
        this._orders = this._orders.filter((el) => el.category === category)
    }
}






