import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import UserForm from './components/UserForm'
import EditUserForm from './components/EditUserForm'
import LoginForm from './components/LoginForm'
import PlantForm from './components/PlantForm'
import PlantList from './components/PlantList'
import Plant from './components/Plant'

function App() {
  return (
    <div className="App">
      <h1>text placeholder</h1>
        <div>
          <h5>navbar</h5>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/signup'>Sign Up</Link></li>
            <li><Link to='/login'>Login</Link></li>
          </ul>
          <br></br>
          <ul>
            <li><Link to='/edituser'>View/Edit User</Link></li>
            <li><Link to='/plantform'>Create Plant</Link></li>
            <li><Link to='/plantlist'>View Plant List</Link></li>
          </ul>
        </div>

      <Switch>
        <Route path="/plantlist">
          <PlantList />
        </Route>
        <Route path="/plant-list/:id">
          <Plant />
        </Route>
        <Route path="/plantform">
          <PlantForm />
        </Route>
        <Route path="/edituser">
          <EditUserForm />
        </Route>
        <Route path="/signup">
          <UserForm />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;