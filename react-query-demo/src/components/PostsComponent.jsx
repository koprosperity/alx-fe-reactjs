import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

const PostsComponent = () => {
  const { data, isLoading, error, refetch } = useQuery('posts', fetchPosts, {
    staleTime: 60000, // Cache the data for 1 minute
    refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>An error occurred: {error.message}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;