import { collection, deleteDoc, doc, getDocs, query,  where } from "firebase/firestore";
import { db } from "../firebase-config";

export const getOrders = async (userEmail) =>{
    const ordersRef = collection(db, "orders");
    const q = query(ordersRef, where("userEmail", "==", userEmail))
    const data = (await getDocs(q)).docs.map(doc => doc.data())
    return data
}

export const removeItem = async(userEmail, name) =>{
    const ordersRef = collection(db, "orders")
    const q = query(ordersRef, where("userEmail", "==", userEmail))
    const data = (await getDocs(q)).docs.map(doc => doc.data())
    const findItem = data.find(el => el.name === name)
    await deleteDoc(doc, (db, "orders", findItem.id))
}