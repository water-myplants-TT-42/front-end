import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { Theme } from './components/styled/theme';
import GlobalStyle from './components/styled/Global';

import Home from './components/Home';
import UserForm from './components/UserForm';
import EditUserForm from './components/EditUserForm';
import LoginForm from './components/LoginForm';
import PlantForm from './components/PlantForm';
import PlantList from './components/PlantList';
import Plant from './components/Plant';
import Navbar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute';
import { signupRequest, loginRequest } from './utils/requests';

// Mock Callbacks
const deletePlantRequest = (plantId) => {
  console.log('Tried to delete plant: ', plantId)
}

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <div className="App">
        <Navbar />
        <Switch>
          <PrivateRoute path="/plantlist/:id" component={() => <Plant deletePlant={deletePlantRequest} />} />
          <PrivateRoute path="/plantlist" component={() => <PlantList deletePlant={deletePlantRequest} />} />
          <PrivateRoute path="/plantform" component={PlantForm} />
          <PrivateRoute path="/edituser" component={EditUserForm} />
          <Route path="/signup">
            <UserForm submit={signupRequest} />
          </Route>
          <Route path="/login">
            <LoginForm submit={loginRequest} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;