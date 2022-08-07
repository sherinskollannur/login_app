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

  //   alert(userType);
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
        ? history.push({
            pathname: '/admin_dashboard',
            state: { loginData: loginData },
          })
        : history.push({
            pathname: '/user_dashboard',
            state: { loginData: loginData },
          });
    } else if (!isAuthenticated && loginData) {
      alert('Login Failed....Please enter correct username and password');
    }
  }, [isAuthenticated, loginData]);

  return (
    <div>
      <LoginForm authenticationCheckFn={authenticationCheckFn} />
      <br />
      {/* {loginData !== null && isAuthenticated === false && <p>login Failed</p>} */}
    </div>
  );
}
