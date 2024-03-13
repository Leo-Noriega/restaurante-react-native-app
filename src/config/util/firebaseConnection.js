import { initializeApp, getApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAua29J5MGtHMksCGKZXXPUGfV1e9TuUtk",
  authDomain: "restaurante-aef9d.firebaseapp.com",
  projectId: "restaurante-aef9d",
  storageBucket: "restaurante-aef9d.appspot.com",
  messagingSenderId: "697287415737",
  appId: "1:697287415737:web:5b1c10ebf5795fa9f40868",
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

const db = getFirestore(app);

const storage = getStorage(app);

// Initialize Firebase
export { app, auth, db, storage };
