import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import Home from './components/Home';
import { me, logout } from './store';
import Navbar from './components/Navbar';

const App = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(me());
  }, []);

  const handleClick = () => {
    dispatch(logout(navigate));
  };

  return (
    <div>
      <Navbar handleClick={handleClick} isLoggedIn={isLoggedIn} />
      <Routes>
        <Route exact path="/" element={isLoggedIn ? <Home /> : <AuthForm />} />
        <Route path="/login" element={isLoggedIn ? <Home /> : <AuthForm />} />
        <Route path="/signup" element={isLoggedIn ? <Home /> : <AuthForm />} />
        <Route path="/home" element={isLoggedIn ? <Home /> : <AuthForm />} />
      </Routes>
    </div>
  );
};

export default App;
