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
        // if(findItem){
        //     if(findItem.sizes === order.sizes){
        //         findItem.count++;
        //     }else{
        //         this._orders.push(order);
        //     }
        // }
        if(findItem){
            if(findItem.sizes === order.sizes){
                        findItem.count++;
                    }
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
    removeItem(id){
        this._orders = this._orders.filter(item => item.id != id)
    }
    setFilter(category){
        this._orders = this._orders.filter((el) => el.category === category)
    }
}






