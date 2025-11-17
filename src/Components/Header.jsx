import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {useEffect} from 'react'
import '../css/Header.css';
import { FaCircleUser, FaRightFromBracket } from 'react-icons/fa6';
import logo from '../../public/argentBankLogo.webp';
import { logout } from '../Slices/loginUserSlices';
import { clearUser, userProfile } from '../Slices/userSlice';

function Header({hideSignOutOn = ['/SignIn', '/'] }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state) => state.user.info)
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token) {
      dispatch(userProfile(token))
    }
  }, [token, dispatch])

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearUser())
    navigate('/');
  };

  const showSignOut = !hideSignOutOn.includes(location.pathname);

  return (
    <header>
      <nav className="header__nav">
        <Link to="/" className="header__nav__link">
          <img src={logo} alt="Argent Bank Logo" className="header__nav__link--logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div className="NavLinks">
          <Link to="/SignIn" className="header__nav__link sign-in">
            <FaCircleUser className="header__nav__link--user-icon" />
            {user ? user.userName : "Sign In"}
          </Link>
          {showSignOut && token && (
            <button className="header__nav__link sign-out" onClick={handleLogout}>
              <FaRightFromBracket className="header__nav__link--user-icon" />
              Sign Out
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
