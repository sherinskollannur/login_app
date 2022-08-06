import './App.css'
import Login from './components/login/Login'
import SignUp from './components/signup/SignUp'
import UserDashboard from './components/user/UserDashboard'
import AdminDashboard from './components/admin/AdminDashboard'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'grey' }}>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/sign_up">
          <SignUp />
        </Route>
        <Route path="/user_dashboard">
          <UserDashboard />
        </Route>
        <Route path="/admin_dashboard">
          <AdminDashboard />
        </Route>
      </Switch>
    </div>
  )
}

export default App
