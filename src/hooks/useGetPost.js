import { useState, useEffect } from 'react';
import { firestore } from '../services/firebase';
import { collection, query, orderBy, getDocs } from "firebase/firestore";


const POSTS = 'posts';

const useGetPost = () => {
  const [result, setResult] = useState([]);
  useEffect( () => {
    const postQuery = query(collection(firestore, POSTS), orderBy('date', 'desc'));
    getDocs(postQuery)
    .then(querySnapshot => {
      const preResult = [];
      querySnapshot.forEach((postRef) => {
        const post = { id: postRef.id, ...postRef.data() };
        preResult.push(post)
      });
      return preResult;
    }).then(preResult => setResult(preResult));
  }, [])

  return result;
}

export default useGetPost;
