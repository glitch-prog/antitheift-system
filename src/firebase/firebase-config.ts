// import {initializeApp} from 'firebase/app';

// import {getAuth} from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: 'AIzaSyBX_fgLM-LjRUoLqdPutUO4DHAP6IAu7zk',
//   authDomain: 'mrecproject-33902.firebaseapp.com',
//   projectId: 'mrecproject-33902',
//   storageBucket: 'mrecproject-33902.appspot.com',
//   messagingSenderId: '120579372006',
//   appId: '1:120579372006:web:b48f172ccb62e91198dc27',
// };

// const app = initializeApp(firebaseConfig);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7K6ATSXJpKtjoHTlKYDD8sVcUg1MMJKw",
  authDomain: "node-js-66b48.firebaseapp.com",
  projectId: "node-js-66b48",
  storageBucket: "node-js-66b48.appspot.com",
  messagingSenderId: "570917669756",
  appId: "1:570917669756:web:3f13de15e8a15276c132f9",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
// export const db = initializeFirestore(app, {
//   experimentalForceLongPolling: true,
// });
