import React from 'react';
import SignUp from './SignUp';
import Login from './Login';
import Navbar from './Navbar/Navbar';
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
        {/* Since in a router, it executes all the routes from top to bottom. so we use switch to not allow it to render the next path */}
        <Switch>
          {/* exact means that this route will be only rendered if the path is exactly / */}
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
          {/* Redirect is like an else satement, if there is already a particular path it will take us there, else redirect to default / */}
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
