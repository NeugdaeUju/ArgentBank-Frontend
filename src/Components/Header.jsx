import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../css/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/argentBankLogo.png';
import { logout } from '../Slices/loginUserSlices';

function Header({ title, hideSignOutOn = ['/SignIn', '/'] }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const token = useSelector((state) => state.auth.token);

  const handleLogout = () => {
    dispatch(logout());
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
            <FontAwesomeIcon icon={faCircleUser} className="header__nav__link--user-icon" />
            {title}
          </Link>
          {showSignOut && (
            <button className="header__nav__link sign-out" onClick={handleLogout}>
              <FontAwesomeIcon icon={faRightFromBracket} className="header__nav__link--user-icon" />
              Sign Out
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
