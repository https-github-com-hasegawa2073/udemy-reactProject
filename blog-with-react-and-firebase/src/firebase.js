import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_qR853uq7bp3RRaRXKbJlniLhiwFt20E",
  authDomain: "blog-9a873.firebaseapp.com",
  projectId: "blog-9a873",
  storageBucket: "blog-9a873.appspot.com",
  messagingSenderId: "273843654604",
  appId: "1:273843654604:web:09e447e10e398a024e9769",
  measurementId: "G-ENH5BXBY1R",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
