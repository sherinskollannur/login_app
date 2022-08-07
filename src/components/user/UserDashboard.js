import * as React from 'react';
import OutlinedCard from '../layout/OutlinedCard';
import Header from '../layout/Header';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function UserDashboard(props) {
  const location = useLocation();

  const userData = useSelector((state) => state.users);

  const loginUserData = userData.find(
    (user) => user.email === location.state.loginData.email
  );
  console.log(loginUserData);

  return (
    <Header>
      <OutlinedCard loginUserData={loginUserData} />
    </Header>
  );
}

export default UserDashboard;
