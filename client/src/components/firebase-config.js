import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyD6-xWbj7M65RRzEpfkTKHI2PqtndkzBb0",
    authDomain: "mini-project-a0058.firebaseapp.com",
    projectId: "mini-project-a0058",
    storageBucket: "mini-project-a0058.appspot.com",
    messagingSenderId: "447667133633",
    appId: "1:447667133633:web:6abc65a268a75006990840",
    measurementId: "G-X9EY5E959Z"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);