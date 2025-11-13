import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SignInForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../Slices/loginUserSlices';
import {userProfile} from '../Slices/userSlice'

function SignInForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  
  useEffect(() => {
    if (token) {
      dispatch(userProfile(token));
      navigate('/user');
    }
  }, [token , dispatch , navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    dispatch(loginUser({ email, password }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input name="email" type="email" id="email" required />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input name="password" type="password" id="password" required />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button type="submit" className="sign-in-button">Sign In</button>
    </form>
  );
}

export default SignInForm;
