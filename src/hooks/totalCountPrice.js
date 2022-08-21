import { toJS } from 'mobx'
export function useTotalPriceCount(obj){
    let items = toJS(obj.orders)
    let totalPrice = items.reduce((sum, item)=> sum + (item.count * item.price), 0)
    let totalCount = items.reduce((sum, item) => sum + item.count, 0)
    return {totalPrice, totalCount}
}