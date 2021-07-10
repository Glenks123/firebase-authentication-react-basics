import React from 'react';
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';

const Navbar = () => {
  return (
    <nav className="z-depth-0 grey lighten-4">
      <div className="nav-wrapper container">
        <NavLink
          to="/"
          className="brand-logo"
          style={{ color: 'dimgrey', fontWeight: 'bold' }}
        >
          Programming Guides
        </NavLink>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
