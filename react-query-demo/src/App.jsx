import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent';

const queryClient = new QueryClient();

function App() {
  const OtherComponent = () => <p>Another screen!
  </p>

  return (
    <div>
      <div>
        <button onClick={() => setShowPosts(!showPosts)}>
          {showPosts ? 'Go to Other Screen' : 'Go to Posts'}
        </button>
        {showPosts ? <PostsComponent /> : <OtherComponent />}
      </div>
      <QueryClientProvider client={queryClient}>
        <PostsComponent />
      </QueryClientProvider>
    </div>
  );
}

export default App;