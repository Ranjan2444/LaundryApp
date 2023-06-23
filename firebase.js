import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0hoVtQrgtYR35LK1WulLNRMmql4zVmSY",
  authDomain: "laundry-application-35567.firebaseapp.com",
  projectId: "laundry-application-35567",
  storageBucket: "laundry-application-35567.appspot.com",
  messagingSenderId: "358742363443",
  appId: "1:358742363443:web:207acd26e8f963b9470246",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore();

export { auth, db };
