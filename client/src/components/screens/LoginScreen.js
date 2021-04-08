import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './LoginScreen.css';

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      history.push('/');
    }
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const { data } = await axios.post(
        '/api/auth/login',
        { email, password },
        config
      );

      localStorage.setItem('authToken', data.token);

      history.push('/');
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError('');
      }, 5000);
    }
  };

  return (
    <div className="login-screen-splitScreen">
      <div className="login-screen__left">
        <form onSubmit={loginHandler} className="login-screen__form">
          <h3 className="login-screen__title">Log in to Skrip</h3>
          {error && <span className="error-message">{error}</span>}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              required
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              tabIndex={1}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              Password:
              <Link
                to="/forgotpassword"
                className="login-screen__forgotpassword"
                tabIndex={3}
              >
                Forgot Password?
              </Link>
            </label>
            <input
              type="password"
              required
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              tabIndex={2}
            />
          </div>

          <button type="submit" className="login-btn" tabIndex={4}>
            Login
          </button>

          <span className="login-screen__subtext">
            Don't have an account? <Link to="/register">Create Account</Link>
          </span>
        </form>
      </div>

      <div className="overview__right">
        <h3 className="overview__title">Image placeholder</h3>
      </div>
    </div>
  );
};

export default LoginScreen;
