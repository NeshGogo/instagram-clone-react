import React from 'react';
import PostCard from './PostCard';

const PostCardList = (props) => {
  const { posts } = props
  const hasPost = posts.length > 0;
  return (
      <div>
        {
          hasPost && posts.map(post => (<PostCard post={post} key={post.id}/>))
        }
      </div>
  );
};

export default PostCardList;