import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

const PostsComponent = () => {
  const { data, isLoading, isError, refetch, isFetching } = useQuery('posts', fetchPosts, {
    staleTime: 60000, // Cache data for 1 minute
    cacheTime: 300000, // Keep data in cache for 5 minutes
    keepPreviousData: true, // Keep showing previous data while fetching new data
    refetchOnWindowFocus: false, // Disable refetch on window focus
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>An error occurred while fetching the posts.</p>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch} disabled={isFetching}>
        {isFetching ? 'Refetching...' : 'Refetch Posts'}
      </button>
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