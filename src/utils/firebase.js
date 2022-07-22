import { initializeApp } from "firebase/app";
// { getDatabase } from 'firebase/database';
import { getAuth } from "firebase/auth"
/* import "firebase/storage"
import "firebase/firestore"
 */
const firebaseConfig = {
  apiKey: "AIzaSyBkV_fd5GOHpvGcNx1N07C5URH-iGYNhdU",
  authDomain: "nomina-59fa6.firebaseapp.com",
  projectId: "nomina-59fa6",
  storageBucket: "nomina-59fa6.appspot.com",
  messagingSenderId: "873851299318",
  appId: "1:873851299318:web:c511f2b68fa50aa6e853d7"
};
//firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

// Utils
const auth = getAuth();
/* const storage = firebase.storage();
const db = firebase.firestore(); */

// Collection references
// const payrollsCollection = db.collection("payroll");

// Exports
export { auth , app };