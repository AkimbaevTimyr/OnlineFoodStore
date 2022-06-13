import { collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase-config";
import { addOrder } from "./addOrders";

export const getOrders = async (userEmail) =>{
    const ordersRef = collection(db, "orders");
    const q = query(ordersRef, where("userEmail", "==", userEmail))
    const data = (await getDocs(q)).docs.map(doc => doc.data())
    return data
}

export const cancelOrders = async (userEmail) => {
    const ordersRef = collection(db, "orders")
    const q = query(ordersRef, where("userEmail", "==", userEmail))
    const data = (await getDocs(q)).docs
    await Promise.all(data.map(el => deleteDoc(doc(db, "orders", el.id))))
}

export const plusOrder = async (userEmail, order) => {
    const ordersRef = collection(db, "orders")
    const q = query(ordersRef, where("userEmail", "==", userEmail))
    const data = (await getDocs(q)).docs.map(doc => doc.data())
    const findItem = data.find(el => el.name === order.name)
    if(findItem){
        findItem.count++
    }else{
        addOrder(order)
    }
}