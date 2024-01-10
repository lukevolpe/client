import { useContext, useState } from 'react';
import './login.css';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [creds, setCreds] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (ev) => {
    setCreds((prev) => ({ ...prev, [ev.target.id]: ev.target.value }));
  };

  const handleLogin = async (ev) => {
    ev.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post('/api/auth/login', creds);
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.details });
      navigate('/');
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILED', payload: err.response.data });
    }
  };

  return (
    <div className='login'>
      <div className='loginContainer'>
        <input
          type='text'
          id='username'
          onChange={handleChange}
          placeholder='Username'
          className='loginInput'
        />
        <input
          type='password'
          id='password'
          onChange={handleChange}
          placeholder='Password'
          className='loginInput'
        />
        <button
          disabled={loading}
          onClick={handleLogin}
          className='loginButton'
        >
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
