import orders from '../../store/order'
import { toJS } from "mobx";
export const useCart = () =>{
    const cartItems  = orders.orders
    // console.log(cartItems)
    // const totalPrice = cartItems.reduce((sum, obj) => ((obj.price * obj.pizzaCount) + sum), 0)
    let totalPrice
    return {totalPrice}
}
