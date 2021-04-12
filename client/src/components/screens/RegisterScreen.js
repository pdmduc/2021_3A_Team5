import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './RegisterScreen.css';
import overview1 from '../../assets/overview1.png';

const RegisterScreen = ({ history }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      history.push('/');
    }
  }, [history]);

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };

    if (password !== confirmpassword) {
      setPassword('');
      setConfirmPassword('');
      setTimeout(() => {
        setError('');
      }, 5000);
      return setError('Password do not match');
    }

    try {
      const { data } = await axios.post(
        '/api/auth/register',
        { username, email, password },
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
    <div className="register-screen-splitScreen">
      <div className="register-screen">
        <form onSubmit={registerHandler} className="register-screen__form">
          <h3 className="register-screen__title">
            Get started absolutely free
          </h3>
          {error && <span className="error-message">{error}</span>}
          <div className="form-group">
            <label htmlFor="name">Username:</label>
            <input
              className="input-field"
              type="text"
              required
              id="name"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              className="input-field"
              type="email"
              required
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              className="input-field"
              type="password"
              required
              id="password"
              autoComplete="true"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmpassword">Confirm Password:</label>
            <input
              className="input-field"
              type="password"
              required
              id="confirmpassword"
              autoComplete="true"
              placeholder="Confirm password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-btn">
            Register
          </button>

          <span className="register-screen__subtext">
            Already have an account? <Link to="/login">Sign in</Link>
          </span>
        </form>
      </div>
      <div className="overview__right">
        <img src={overview1} />
        <h3 className="overview__title">Strategy Overview</h3>
        <p>Plan and track your strategies for capital managment</p>
      </div>
    </div>
  );
};

export default RegisterScreen;
