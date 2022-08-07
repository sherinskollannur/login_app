import React from 'react';
import OutlinedCard from '../layout/OutlinedCard';
import Header from '../layout/Header';
import './AdminDashboard.css';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

function AdminDashboard() {
  const location = useLocation();

  const userData = useSelector((state) => state.users);

  const loginUserData = userData.find(
    (user) => user.email === location.state.loginData.email
  );

  return (
    <Header>
      <OutlinedCard loginUserData={loginUserData} />
      <h2 style={{ marginTop: '50px' }}>Registered Users</h2>

      <div className="card_wrapper">
        {userData.map((user, index) => (
          <OutlinedCard
            loginUserData={loginUserData}
            registeredUsers={user}
            key={index}
          />
        ))}
      </div>
    </Header>
  );
}

export default AdminDashboard;
