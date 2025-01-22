import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';

const App = () => {
  const isAuthenticated = true;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/blog/:postId" element={<BlogPost />} />
      </Routes>
    </Router>
  );
};

export default App;