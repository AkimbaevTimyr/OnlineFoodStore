import axios from "axios"
import { $host } from "."

export const getPizzas = async (number) =>{
    const { data } = await $host.get(`pizzas?page=${number}&limit=3`)
    return data
}

export const filterPizzas  = async (id) =>{
    const {data} = await $host.get('pizzas?category=' + id)
    return data
}