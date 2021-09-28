import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { environment }  from '../env/enviroment';


// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);


const firestore = getFirestore(app);
// const auth = firebase.auth() || undefined;
// const storage =  firebase.storage? firebase.storage() :  undefined
// const fieldValue = firebase.firestore? firebase.firestore.FieldValue : undefined;
// export default firebase;

export {
  firestore,
  // auth,
  // storage,
  // fieldValue,
} ;