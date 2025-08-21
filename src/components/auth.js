import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import './auth.css';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const toggleMode = () => setIsLogin(!isLogin);

  const handleSubmit = (e) => {
    e.preventDefault();


    if (isLogin) {
 
      navigate('/home');
    } else {

      navigate('/home');
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-wrapper">
        <div className="auth-header">
          <h2 className="gradient-text">
            {isLogin ? 'Welcome Back!' : 'Create an Account'}
          </h2>
          <p>
            {isLogin
              ? "Login to enjoy seamless shopping and reservations."
              : "Join the retail revolution—compare, reserve, and shop smarter."}
          </p>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              className="auth-input"
              placeholder="Full Name"
              required
            />
          )}
          <input
            type="email"
            className="auth-input"
            placeholder="Email Address"
            required
          />
          <input
            type="password"
            className="auth-input"
            placeholder="Password"
            required
          />
          {!isLogin && (
            <input
              type="password"
              className="auth-input"
              placeholder="Confirm Password"
              required
            />
          )}
          <button className="auth-btn" type="submit">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <div className="toggle-msg">
          {isLogin
            ? "Don't have an account? "
            : 'Already have an account? '}
          <span className="toggle-link" onClick={toggleMode}>
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Auth;
