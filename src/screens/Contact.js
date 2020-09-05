import React from 'react';
import { NavLink } from 'react-router-dom';

const Contact = (props) => {
  return (
    <div>
      <NavLink to="/about">
        <button>About</button>
      </NavLink>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      Contact
    </div>
  );
};
export default Contact;
