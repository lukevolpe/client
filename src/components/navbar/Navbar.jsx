import { Link } from 'react-router-dom';
import './navbar.css';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className='navbar'>
      <div className='navContainer'>
        <Link to={'/'} className='logo'>
          Booking.com
        </Link>
        {user ? (
          <span>
            Welcome, {user.username} |{' '}
            <a className='adminLink' href='http://localhost:5173/'>
              Go to admin
            </a>
          </span>
        ) : (
          <div className='navItems'>
            <Link to='/register'>
              <button className='navButton'>Register</button>
            </Link>
            <Link to='/login'>
              <button className='navButton'>Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
