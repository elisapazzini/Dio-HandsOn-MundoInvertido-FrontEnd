import app from "/assets/firebase/app.js"
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js'

export async function subscribeToHellFireClube(subscription) {
    const db = getFirestore(app)
    const hellfireClubeCollection = collection(db, 'hellfire-clube')
    const docRef = await addDoc(hellfireClubeCollection,subscription)
    return docRef.id
}