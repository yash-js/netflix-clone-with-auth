import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD29skcEC99IBqSJ6weBD_RaI8x7hOMRNs",
  authDomain: "netflix-clone-ac04b.firebaseapp.com",
  projectId: "netflix-clone-ac04b",
  storageBucket: "netflix-clone-ac04b.appspot.com",
  messagingSenderId: "86364470299",
  appId: "1:86364470299:web:d5765a1c97e87df0964cbe",
  measurementId: "G-47STD27MDK"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth()


export { auth }

export default db