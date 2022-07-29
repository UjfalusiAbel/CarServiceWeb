import React, {Suspense, useState} from 'react';
import routes, { IRoute as RouteType } from './Utils/Routes'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import MainScreen from './Components/Pages/MainScreen';
import LoginScreen from './Components/Pages/LoginScreen';
import {Menu} from 'semantic-ui-react';
import RegisterScreen from './Components/Pages/RegisterScreen';
import PackageScreen from './Components/Pages/PackageScreen';
import SearchServiceScreen from './Components/Pages/SearchServiceScreen';

function App() {

  return (
    <div>
      <Router>
        <Menu inverted>
          <Menu.Item name="Home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item name="Login">
            <Link to="/login">Logare</Link>
          </Menu.Item>
          <Menu.Item name="Register">
            <Link to="/register">Registrare</Link>
          </Menu.Item>
          <Menu.Item name="Packages">
            <Link to="/offers">Pachete</Link>
          </Menu.Item>
          <Menu.Item name = "Searching">
            <Link to="/services">Caută</Link>
          </Menu.Item>
        </Menu>
        <Switch>
          <Route exact path="/" component={MainScreen}></Route>
          <Route path="/login" component={LoginScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/offers" component={PackageScreen}></Route>
          <Route path="/services" component={SearchServiceScreen}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
