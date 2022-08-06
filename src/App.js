import './App.css'
import Login from './components/login/Login'
import SignUp from './components/signup/SignUp'
import UserDashboard from './components/user/UserDashboard'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
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
      </Switch>
    </div>
  )
}

export default App
