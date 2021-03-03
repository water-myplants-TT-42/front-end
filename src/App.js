import React, { useState } from 'react';
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
  const [plantList, setPlantList] = useState([]);
  const [userID, setUserID] = useState(null);
  console.log('userID:', userID);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <div className="App">
        <Navbar />
        <Switch>
          <PrivateRoute path="/plantlist/:id" component={() => <Plant deletePlant={deletePlantRequest} />} />
          {/* <PrivateRoute path="/plantlist" children={() => <PlantList userID={userID} plantList={plantList} setPlantList={setPlantList} deletePlant={deletePlantRequest} />} /> */}

          <PrivateRoute path="/plantlist">
            <PlantList userID={userID} plantList={plantList} setPlantList={setPlantList} deletePlant={deletePlantRequest} />
          </PrivateRoute>
          <PrivateRoute path="/plantform" component={() => <PlantForm userID={userID} />} />
          <PrivateRoute path="/edituser" component={EditUserForm} />
          <Route path="/signup">
            <UserForm submit={signupRequest} />
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