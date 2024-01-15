import { useContext, useState } from 'react';
import './register.css';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [creds, setCreds] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (ev) => {
    setCreds((prev) => ({ ...prev, [ev.target.id]: ev.target.value }));
  };

  const handleRegister = async (ev) => {
    ev.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      // Send field states to API to create user
      // Automatically log in the user and navigate to homepage
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='login'>
      <div className='loginContainer'>
        <h1 className='heading'>Create an account</h1>
        <input
          type='text'
          id='firstname'
          onChange={handleChange}
          placeholder='First name'
          className='loginInput'
        />
        <input
          type='text'
          id='lastname'
          onChange={handleChange}
          placeholder='Last name'
          className='loginInput'
        />
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
          onClick={handleRegister}
          className='loginButton'
        >
          Create account
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Register;
