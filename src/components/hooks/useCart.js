import orders from '../../store/order'
import { toJS } from "mobx";
export const useCart = () =>{
    const cartItems  = toJS(orders.orders);
    const totalPrice = cartItems.reduce((sum, obj)=> ((obj.price + sum) * obj.pizzaCount),0);
    return {totalPrice}
}
