import { collection, deleteDoc, doc, getDocs, query,  where, updateDoc, increment } from "firebase/firestore";
import { db } from "../firebase-config";

export const minusOrder = async (userEmail, name) => {
    const ordersRef = collection(db, "orders")
    const q = query(ordersRef, where("userEmail", "==", userEmail))
    const d = query(q, where("name", "==", name))
    const data =(await getDocs(d)).docs
    const countRef = doc(db, 'orders', data[0].id)
    await updateDoc(countRef,{
        count: increment(-1)
    })
}

export const cancelOrders = async (userEmail) => {
    const ordersRef = collection(db, "orders")
    const q = query(ordersRef, where("userEmail", "==", userEmail))
    const data = (await getDocs(q)).docs
    await Promise.all(data.map(el => deleteDoc(doc(db, "orders", el.id))))
}

export const deletePizza = async(userEmail, name) => {
    const ordersRef = collection(db, "orders")
    const q = query(ordersRef, where("userEmail", "==", userEmail))
    const d = query(q, where("name", "==" , name))
    const data = (await getDocs(d)).docs
    await deleteDoc(doc(db, "orders", data.id))
}
