import React from 'react';
import SignUp from './SignUp';
import Login from './Login';
import Navbar from './Navbar';
import Guides from './Guides';
import CreateGuide from './CreateGuide';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Guides />
          </Route>
          <Route path="/sign-up" exact>
            <SignUp />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/create-guide" exact>
            <CreateGuide />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
