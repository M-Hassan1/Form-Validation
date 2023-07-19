
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";


// const firebaseConfig = {
//   apiKey: "AIzaSyB5gdpuC9mTiDaoJ7omgwHlrMG3EUz4Ugo",
//   authDomain: "calm-safeguard-392113.firebaseapp.com",
//   projectId: "calm-safeguard-392113",
//   storageBucket: "calm-safeguard-392113.appspot.com",
//   messagingSenderId: "868953276567",
//   appId: "1:868953276567:web:450ae73b1d087f0ba029d2",
//   measurementId: "G-BL5BCMZ9C5"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app)
// export default app






// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";



// const firebaseConfig = {
//   apiKey: "AIzaSyCpQCyxTXX2fQ_t69f7WEu5ku7JIWZ7OAE",
//   authDomain: "multi-media-36807.firebaseapp.com",
//   projectId: "multi-media-36807",
//   storageBucket: "multi-media-36807.appspot.com",
//   messagingSenderId: "52986937612",
//   appId: "1:52986937612:web:0392a2a8ec415dc05bc929",
//   measurementId: "G-XS8L3L3R6F"
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app)
// export default app




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5gdpuC9mTiDaoJ7omgwHlrMG3EUz4Ugo",
  authDomain: "calm-safeguard-392113.firebaseapp.com",
  projectId: "calm-safeguard-392113",
  storageBucket: "calm-safeguard-392113.appspot.com",
  messagingSenderId: "868953276567",
  appId: "1:868953276567:web:450ae73b1d087f0ba029d2",
  measurementId: "G-BL5BCMZ9C5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export default app