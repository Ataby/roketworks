import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';


function App() {
  return (
    <Router>

        <Routes>
          <Route index element={<Login/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
          <Route path ="/home" element = {<Home/>} />
        </Routes>
    
    </Router>
  );
}

export default App;
