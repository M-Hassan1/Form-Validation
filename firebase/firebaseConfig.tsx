import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB5gdpuC9mTiDaoJ7omgwHlrMG3EUz4Ugo",
  authDomain: "calm-safeguard-392113.firebaseapp.com",
  projectId: "calm-safeguard-392113",
  storageBucket: "calm-safeguard-392113.appspot.com",
  messagingSenderId: "868953276567",
  appId: "1:868953276567:web:450ae73b1d087f0ba029d2",
  measurementId: "G-BL5BCMZ9C5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app