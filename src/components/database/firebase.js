import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPpcxhOuSbk_dknSoUgt34VSYfq2cLg2g",
  authDomain: "karapatanko-e686b.firebaseapp.com",
  projectId: "karapatanko-e686b",
  storageBucket: "karapatanko-e686b.appspot.com",
  messagingSenderId: "253855212071",
  appId: "1:253855212071:web:10e25578cb9140b3136402",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export1
export const auth = getAuth(app);
export const db = getFirestore(app); 