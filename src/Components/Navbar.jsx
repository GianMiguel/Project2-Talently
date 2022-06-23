import React from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi"

export default function Navbar() {
  
  // change color when scroll
  const [color,setColor] = React.useState(false);
  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)


  return (
    <div className={color ? 'header header-scroll' : 'header'}>
      <nav>
        <div className="brand--logo">
          <span><FiMenu className="toggle-button"/></span>
          <h1>talently<span>.</span></h1>
        </div>

        <div className="nav--link-wrapper">
          <ul>
            <li><Link to="/" className="nav--link">Home </Link></li>
            <li><Link to="/about" className="nav--link">About Us</Link></li>
            <li><Link to="/talents" className="nav--link">Talents</Link></li>
            <li><Link to="/" className="nav--link">Sign In </Link></li>
            <li><Link to="/signup" className="nav--link--join">Join</Link></li>
          </ul>
        </div>
        
      </nav>
    </div>
  );
}
