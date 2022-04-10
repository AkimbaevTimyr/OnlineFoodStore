import orders from '../../store/order'
import { toJS } from "mobx";
export const useCart = () =>{
    const cartItems  = toJS(orders.orders);
    console.log(cartItems)
    const totalPrice = cartItems.reduce((sum, obj) => ((obj.price * obj.pizzaCount) + sum), 0)
    return {totalPrice}
}
