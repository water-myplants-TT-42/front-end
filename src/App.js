import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import UserForm from './components/UserForm'
import LoginForm from './components/LoginForm'

function App() {
  return (
    <div className="App">
      <Switch>
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
