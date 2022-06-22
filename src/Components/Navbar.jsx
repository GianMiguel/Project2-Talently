import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    

    <div className="header">
      <nav>
        <h1>talently<span>.</span></h1>
        <ul>
          <li><Link to="/" className="nav--link">Home </Link></li>
          <li><Link to="/about" className="nav--link">About Us</Link></li>
          <li><Link to="/talents" className="nav--link">Talents</Link></li>
          <li>Sign In</li>
          <li><button><Link to="/signup">Sign Up</Link></button></li>
        </ul>
      </nav>
    </div>
  );
}
