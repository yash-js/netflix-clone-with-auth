import firebase from "firebase";

const firebaseConfig = {
// GET CONFIG FROM : https://console.firebase.google.com/
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth()


export { auth }

export default db
