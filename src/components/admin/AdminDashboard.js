import React from 'react'
import OutlinedCard from '../layout/OutlinedCard'
import Header from '../layout/Header'
import './AdminDashboard.css'

function AdminDashboard() {
  return (
    <Header>
      <OutlinedCard />
      <h2 style={{ marginTop: '50px' }}>Registered Users</h2>
      <div className="card_wrapper">
        <OutlinedCard />
        <OutlinedCard />
      </div>
    </Header>
  )
}

export default AdminDashboard
