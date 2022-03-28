import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAU155RIRgEBD2zwIrGaSp4CKU8jyq041E",
  authDomain: "nextfire-app-c9df5.firebaseapp.com",
  projectId: "nextfire-app-c9df5",
  storageBucket: "nextfire-app-c9df5.appspot.com",
  messagingSenderId: "390989847755",
  appId: "1:390989847755:web:29a379f2212ebf8f454f4e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const googleAuthProvider = new GoogleAuthProvider();

export const firestore = getFirestore(app);
export const storage = getStorage(app);
