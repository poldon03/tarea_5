
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB1x2wXx-3-CT9aPr9Ydez0WypLD3L5Tbc",
  authDomain: "tarea-5-7acfa.firebaseapp.com",
  projectId: "tarea-5-7acfa",
  storageBucket: "tarea-5-7acfa.appspot.com",
  messagingSenderId: "24185956951",
  appId: "1:24185956951:web:189ef087105e007fd95112",
  measurementId: "G-EN7K2DH1LY"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);