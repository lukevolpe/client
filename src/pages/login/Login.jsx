import { useContext, useState } from 'react';
import './login.css';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

const Login = () => {
  const [creds, setCreds] = useState({
    username: undefined,
    password: undefined,
  });

  const { user, loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (ev) => {
    setCreds((prev) => ({ ...prev, [ev.target.id]: ev.target.value }));
  };

  const handleLogin = async (ev) => {
    ev.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post('/api/auth/login', creds);
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILED', payload: err.resonse.data });
    }
  };

  console.log(user);

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
        <button onClick={handleLogin} className='loginButton'>
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
