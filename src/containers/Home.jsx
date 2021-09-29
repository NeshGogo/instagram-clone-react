import React from 'react';
import Layout from '../components/Layout';
import PostCardList from '../components/PostCardList';
import useGetCollectionOrderByDate from '../hooks/useGetCollectionOrderByDate';
import { collections } from '../services/firebase'

const Home = () => {
  const posts = useGetCollectionOrderByDate(collections.posts);
  return (
    <Layout>
      <PostCardList posts={posts}/>
    </Layout>
  );
};

export default Home;
