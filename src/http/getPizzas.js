import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../firebase-config";

export const getPizzas = async ()=>{
    const querySnapshot = await getDocs(collection(db, "pizzas"));
    return querySnapshot.docs.map(doc => doc.data())
}
export const filterPizzas = async (index) =>{
    const querySnapshot = await getDocs(collection(db, "pizzas"));
    const data = querySnapshot.docs.map(doc => doc.data())
    return data.filter(el => el.category === index)
}