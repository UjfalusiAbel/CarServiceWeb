import React, {Suspense} from 'react';
import routes, { IRoute as RouteType } from './Utils/Routes'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import MainScreen from './Components/MainScreen';
import LoginScreen from './Components/LoginScreen';
import {Menu} from 'semantic-ui-react';
import RegisterScreen from './Components/RegisterScreen';

function App() {
  return (
    <div>
      <Router>
        <Menu>
          <Menu.Item name="Home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item name="Login">
            <Link to="/login">Logare</Link>
          </Menu.Item>
          <Menu.Item name="Register">
            <Link to="/register">Registrare</Link>
          </Menu.Item>
          <Menu.Item name="Packs">Pachete</Menu.Item>
        </Menu>
        <Switch>
          <Route exact path="/" component={MainScreen}></Route>
          <Route path="/login" component={LoginScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
