import React from 'react';
import { NavLink } from 'react-router-dom';

const About = (props) => {
  return (
    <div>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      <NavLink to="/contact">
        <button>Contact</button>
      </NavLink>
      About
    </div>
  );
};
export default About;
