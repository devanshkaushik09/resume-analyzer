import React from 'react';
import {Link} from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/">
            <p className="text-2xl font-bold text-gradient">CVision</p>
        </Link>
        <Link to="/upload" className="primaryButton w-fit">
            Upload Resume
        </Link>

    </nav>
  );
};

export default Navbar;