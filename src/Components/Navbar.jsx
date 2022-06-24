import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

export default function Navbar() {
  // change color when scroll
  const [navControls, setNavControls] = React.useState({
    color: true,
    page: "",
    expandNav: false,
  });

  const changeColor = () => {
    if (window.scrollY >= 80) {
      setNavControls((prevNavControls) => ({
        ...prevNavControls,
        color: false,
      }));
    } else {
      setNavControls((prevNavControls) => ({
        ...prevNavControls,
        color: true,
      }));
    }
  };

  if (navControls.page === "/") window.addEventListener("scroll", changeColor);

  const location = useLocation();

  React.useEffect(() => {
    setNavControls((prevNavControls) => ({
      ...prevNavControls,
      page: location.pathname,
    }));
  }, [location]);

  function expandNav() {
    setNavControls((prevNavControls) => ({
      ...prevNavControls,
      expandNav: true,
    }));
  }

  function collapseNav() {
    setNavControls((prevNavControls) => ({
      ...prevNavControls,
      expandNav: false,
    }));
  }

  return (
    <div
      className={`header ${
        navControls.color && navControls.page === "/"
          ? !navControls.expandNav
            ? ""
            : "header--expand"
          : !navControls.expandNav
          ? "header--active"
          : "header--active header--expand"
      }`}
    >
      <nav>
        <div className="brand--logo">
          <h1>
            talently<span>.</span>
          </h1>
        </div>
        <div className="nav--link--wrapper">
          <ul>
            <li>
              <Link to="/" className="nav--link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/talents" className="nav--link">
                Talents
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav--link">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/" className="nav--link">
                Sign In
              </Link>
            </li>
            <li>
              <Link to="/signup" className="nav--link--join">
                Join
              </Link>
            </li>
          </ul>
          <span>
            {navControls.expandNav ? (
              <GrClose className="toggle--button" onClick={collapseNav} />
            ) : (
              <FiMenu className="toggle--button" onClick={expandNav} />
            )}
          </span>
        </div>
      </nav>
      {navControls.expandNav && (
        <div className="nav--links--collapsed">
          <ul>
            <li>
              <Link to="/" className="nav--link" onClick={collapseNav}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/talents" className="nav--link" onClick={collapseNav}>
                Talents
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav--link" onClick={collapseNav}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/" className="nav--link" onClick={collapseNav}>
                Sign In
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="nav--link--join"
                onClick={collapseNav}
              >
                Join
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
