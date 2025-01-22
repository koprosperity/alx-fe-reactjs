import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost"; // Import the BlogPost component
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route
      path="/profile"
      element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      }
    />
    <Route path="/blog/:id" element={<BlogPost />} />
  </Routes>
</Router>
  );
};

export default App;