import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { Theme } from './components/styled/theme';
import GlobalStyle from './components/styled/Global';

import Home from './components/Home';
import SignUpForm from './components/SignUpForm';
import EditUserForm from './components/EditUserForm';
import LoginForm from './components/LoginForm';
import PlantForm from './components/PlantForm';
import PlantList from './components/PlantList';
import Plant from './components/Plant';
import NavBar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute';
import { signupRequest, loginRequest, editUserRequest } from './utils/requests';

// Mock Callbacks
const deletePlantRequest = (plantId) => {
  console.log('Tried to delete plant: ', plantId)
}

function App() {
  const [plantList, setPlantList] = useState([]);
  const [userID, setUserID] = useState(null);
  console.log('userID:', userID);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <div className="App">
        <NavBar />
        <Switch>
          <PrivateRoute path="/plantlist/:id">
            <Plant deletePlant={deletePlantRequest} plantList={plantList} setPlantList={setPlantList} />
          </PrivateRoute>
          <PrivateRoute path="/plantlist">
            <PlantList userID={userID} plantList={plantList} setPlantList={setPlantList} deletePlant={deletePlantRequest} />
          </PrivateRoute>
          <PrivateRoute path="/plantform">
            <PlantForm userID={userID} />
          </PrivateRoute>
          <PrivateRoute path="/edituser">
            <EditUserForm submit={editUserRequest} userID={userID} />
          </PrivateRoute>
          <Route path="/signup">
            <SignUpForm submit={signupRequest} />
          </Route>
          <Route path="/login">
            <LoginForm submit={loginRequest} setUserID={setUserID} />
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