import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: NEXT_FIREBASE_APIKEY,
  authDomain: "nextfire-app-c9df5.firebaseapp.com",
  projectId: "nextfire-app-c9df5",
  storageBucket: "nextfire-app-c9df5.appspot.com",
  messagingSenderId: "390989847755",
  appId: "1:390989847755:web:29a379f2212ebf8f454f4e",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
