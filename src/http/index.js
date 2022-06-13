import axios from 'axios'

const $host = axios.create({
    baseURL: "https://62909fcd665ea71fe136e448.mockapi.io/pizzas/"
})


export {$host}