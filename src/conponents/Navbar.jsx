import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "black"}}>
        <Link to='/hlo'>day 1</Link>
        <NavLink to='/greet'>about</NavLink>
    </nav>
  )
}

export default Navbar