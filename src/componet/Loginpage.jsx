import React, { useState } from 'react';
import './loginpage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Tabs({ activeTab, handleTabChange }) {
  return (
    <div className="tabs">
      <button
        className={activeTab === 'login' ? 'active' : ''}
        onClick={() => handleTabChange('login')}
      >
        Login
      </button>
      <button
        className={activeTab === 'register' ? 'active' : ''}
        onClick={() => handleTabChange('register')}
      >
        Register
      </button>
    </div>
  );
}

function Login({ handleLogin, setMessage, setMessageColor }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = () => {
    if (username === 'root' && password === '12345678') {
      setMessage('Logged In Successfully');
      setMessageColor('green');
    } else {
      setMessage('Invalid Username and Password');
      setMessageColor('red');
    }
  };

  return (
    <div className="form">
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => { handleLogin(); handleFormSubmit(); }}>Login</button>
      <p>
        Forgot password? <a href="#!">Reset here</a>
      </p>
      <div className="social-icons">
        <span>
          <i className="fab fa-facebook-f"></i>
        </span>
        <span>
          <i className="fab fa-google"></i>
        </span>
        <span>
          <i className="fab fa-twitter"></i>
        </span>
      </div>
    </div>
  );
}

function Register({ handleRegister }) {
  return (
    <div className="form">
      <h2>Register</h2>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button onClick={handleRegister}>Register</button>
      <div className="social-icons">
        <span>
          <i className="fab fa-facebook-f"></i>
        </span>
        <span>
          <i className="fab fa-google"></i>
        </span>
        <span>
          <i className="fab fa-twitter"></i>
        </span>
      </div>
    </div>
  );
}

function LoginPage() {
  const [activeTab, setActiveTab] = useState('login');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleLogin = () => {
    // Handle login functionality
  };

  const handleRegister = () => {
    // Handle registration functionality
  };

  const handleSocialLogin = (provider) => {
    // Handle social media login/registration
    console.log(`Logging in/registering with ${provider}`);
  };

  return (
    <div className="container">
      <Tabs activeTab={activeTab} handleTabChange={handleTabChange} />
      {activeTab === 'login' && <Login handleLogin={handleLogin} setMessage={setMessage} setMessageColor={setMessageColor} />}
      {activeTab === 'register' && <Register handleRegister={handleRegister} handleSocialLogin={handleSocialLogin} />}
      <p style={{ color: messageColor }}>{message}</p>
    </div>
  );
}

export default LoginPage;
