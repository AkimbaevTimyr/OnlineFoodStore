import { db } from '../firebase-config';
import { collection, query, where, updateDoc, doc, getDocs , addDoc, increment } from "firebase/firestore";


export const addOrder = async (userEmail, order) => {
    const ordersRef = collection(db, "orders")
    const q = query(ordersRef, where("userEmail", "==", userEmail))
    const d = query(q, where("name", "==", order.name))
    const data =(await getDocs(d)).docs.map(doc => doc.data())
    const findItem = data.find(el => el.name === order.name)
    try{
        if(findItem){
            console.log('Есть такой')
            plusOrder(userEmail, order.name)
        }else{
            const docRef = await addDoc(collection(db, "orders"),order)
        }
    }catch (e) {
        console.error("Error adding document: ", e);
    }
}

export const plusOrder = async (userEmail, name) => {
    const ordersRef = collection(db, "orders")
    const q = query(ordersRef, where("userEmail", "==", userEmail))
    const d = query(q, where("name", "==", name))
    const data =(await getDocs(d)).docs
    const countRef = doc(db, 'orders', data[0].id)
    await updateDoc(countRef,{
        count: increment(1)
    })
}

