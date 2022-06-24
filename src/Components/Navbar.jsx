import React from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi"
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

export default function Navbar() {
  
  const [modalSignUp, setModalSignUp] = React.useState(false);
  const [modalLogin, setModalLogin] = React.useState(false);
  // change color when scroll
  const [color,setColor] = React.useState(false);
  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  const handleModalLogin = () =>{
    !modalLogin ? setModalLogin(true) : setModalLogin(false);
  }

  const handleModalSignUp = () =>{
    !modalSignUp ? setModalSignUp(true) : setModalSignUp(false);
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
            <li><a href="#1" onClick={handleModalLogin} className="nav--link">Sign In </a></li>
            <li><a href="#1" onClick={handleModalSignUp} className="nav--link--join">Join</a></li>
          </ul>
        </div>
        
      </nav>
      {modalLogin ? <Login handleModalLogin={handleModalLogin}/> : ""}
      {modalSignUp ? <SignUp handleModalSignUp={handleModalSignUp}/> : ""}
      
    </div>
  );
}
