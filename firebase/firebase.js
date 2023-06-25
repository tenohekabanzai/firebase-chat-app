import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAavU8SQtonOPkzQMgDPFCWwWQ-su1BoxI",
  authDomain: "fir-chat-app-83acf.firebaseapp.com",
  projectId: "fir-chat-app-83acf",
  storageBucket: "fir-chat-app-83acf.appspot.com",
  messagingSenderId: "205525994990",
  appId: "1:205525994990:web:2022308f1471ed6fb652ff"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage  = getStorage(app);
export const db = getFirestore(app);




