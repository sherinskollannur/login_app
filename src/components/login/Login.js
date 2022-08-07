import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { authAction } from '../../store/auth';
import { useSelector, useDispatch } from 'react-redux';
import LoginForm from './LoginForm';

export default function Login() {
  const history = useHistory();

  //Store values
  const dispatch = useDispatch();
  let isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  let userType = useSelector((state) => state.auth.userType);

  //   alert(isAuthenticated);
  const [loginData, setLoginData] = useState(null);

  //Authentication Check Function
  const authenticationCheckFn = (formData) => {
    //calling store function to verify authentication
    dispatch(authAction.isLogging(formData));
    setLoginData(formData);
  };

  useEffect(() => {
    //Check authentication and redirect
    if (isAuthenticated) {
      userType === 'admin'
        ? history.push('/admin_dashboard')
        : history.push('/user_dashboard');
    }
    // else if (!isAuthenticated && loginData) {
    //   alert('Login Failed....Please enter correct username and password');
    // }
  }, []);

  return (
    <div>
      <LoginForm authenticationCheckFn={authenticationCheckFn} />
      <br />
      {loginData !== null && isAuthenticated === false && <p>login Failed</p>}
    </div>
  );
}
