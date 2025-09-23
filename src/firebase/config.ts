import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzvSasT6xkh2c8QB-phrnoAuUI73xgpfo",
  authDomain: "gallerybuild-9fdef.firebaseapp.com",
  projectId: "gallerybuild-9fdef",
  storageBucket: "gallerybuild-9fdef.appspot.com",
  messagingSenderId: "119730535981",
  appId: "1:119730535981:web:683b7741a05e2ef50382a4",
  measurementId: "G-1MKN6KGZQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app); 
const storage = getStorage(app);   
const db = getFirestore(app);
export { auth, storage,db};
