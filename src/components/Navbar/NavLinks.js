import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { auth } from '../../firebase';

const NavLinks = () => {
  let userState;
  let [authState, setAuthState] = useState(userState);
  auth.onAuthStateChanged((user) => {
    if (user) {
      setAuthState(true);
    } else {
      setAuthState(false);
    }
  });

  return (
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <div style={authState ? { display: 'block' } : { display: 'none' }}>
        <li className="logged-in">
          <NavLink
            to="/"
            className="grey-text modal-trigger"
            data-target="modal-account"
          >
            Account
          </NavLink>
        </li>
        <li className="logged-in">
          <NavLink
            to="/"
            className="grey-text"
            id="logout"
            onClick={() => auth.signOut()}
          >
            Logout
          </NavLink>
        </li>
        <li className="logged-in">
          <NavLink
            to="/create-guide"
            className="grey-text modal-trigger"
            data-target="modal-create"
          >
            Create Guide
          </NavLink>
        </li>
      </div>
      <div style={authState ? { display: 'none' } : { display: 'block' }}>
        <li className="logged-out">
          <NavLink
            to="/login"
            className="grey-text modal-trigger"
            data-target="modal-login"
          >
            Login
          </NavLink>
        </li>
        <li className="logged-out">
          <NavLink
            to="/sign-up"
            className="grey-text modal-trigger"
            data-target="modal-signup"
          >
            Sign up
          </NavLink>
        </li>
      </div>
    </ul>
  );
};

export default NavLinks;
