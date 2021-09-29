import React from 'react';
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import useGetCollectionOrderByDate from '../hooks/useGetCollectionOrderByDate';
import { collections } from '../services/firebase'

const Home = () => {
  const posts = useGetCollectionOrderByDate(collections.posts);
  return (
    <Layout>
      {
        posts.length > 0 && posts.map(post => (<PostCard post={post} key={post.id}/>))
      }
    </Layout>
  );
};

export default Home;
