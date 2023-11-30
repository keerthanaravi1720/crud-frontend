
import './App.css';
import React from 'react';
import LoginForm from './pages/LoginFrom';
import RegisterForm from './pages/RegisterForm';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';

function App() {
  return (
    <div className="App">
      
        <Routes>
         
          <Route exact path="/register" element={<RegisterForm />} />
          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/PostPage" element={<PostPage />} />
        </Routes>
      
    </div>
  );
}

export default App;

