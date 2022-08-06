import React from 'react';
import OutlinedCard from '../layout/OutlinedCard';
import Header from '../layout/Header';
import './AdminDashboard.css';
import { useSelector } from 'react-redux';

function AdminDashboard() {
  const userData = useSelector((state) => state.users);

  console.log(userData);

  return (
    <Header>
      <OutlinedCard />
      <h2 style={{ marginTop: '50px' }}>Registered Users</h2>

      <div className="card_wrapper">
        {userData.map(({ userName, email }) => (
          <OutlinedCard userName={userName} email={email} />
        ))}
      </div>
    </Header>
  );
}

export default AdminDashboard;
