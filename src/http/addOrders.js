import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebase-config';



export const addOrder = async (order) => {
    try{
        const docRef = await addDoc(collection(db, "orders"),{order})
    }catch (e) {
        console.error("Error adding document: ", e);
    }
}