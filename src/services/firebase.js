import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { environment }  from '../env/enviroment';

// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);

export const collections = {
  posts: 'posts',
  users: 'users',
  comments: 'comments',
};
export const firestore = getFirestore(app);
// const auth = firebase.auth() || undefined;
// const storage =  firebase.storage? firebase.storage() :  undefined
// const fieldValue = firebase.firestore? firebase.firestore.FieldValue : undefined;
// export default firebase;
