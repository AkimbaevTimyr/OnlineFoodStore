import axios from "axios"
import { $host } from "."

export const getPizzas = async () =>{
    const { data } = await $host.get('pizzas')
    return data
}

export const filterPizzas  = async (id) =>{
    const {data} = await $host.get('pizzas?category=' + id)
    return data
}