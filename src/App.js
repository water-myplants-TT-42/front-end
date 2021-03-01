import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import UserForm from './components/UserForm'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signup">
          <UserForm />
        </Route>
        <Route path="/login">
          <UserForm />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
