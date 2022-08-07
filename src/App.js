import './App.css';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import UserDashboard from './components/user/UserDashboard';
import AdminDashboard from './components/admin/AdminDashboard';
import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';

function App() {
  let isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/sign_up">
          <SignUp />
        </Route>
        {isAuthenticated && (
          <Route path="/user_dashboard">
            <UserDashboard />
          </Route>
        )}
        {isAuthenticated && (
          <Route path="/admin_dashboard">
            <AdminDashboard />
          </Route>
        )}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
