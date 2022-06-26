import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import { GrClose } from "react-icons/gr";

export default function Navbar(props) {
  const [modalSignUp, setModalSignUp] = React.useState(false);
  const [modalLogin, setModalLogin] = React.useState(false);
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

  const handleModalLogin = (e) => {
    e.preventDefault();
    collapseNav();
    !modalLogin ? setModalLogin(true) : setModalLogin(false);
  };

  const handleModalSignUp = (e) => {
    e.preventDefault();
    collapseNav();
    !modalSignUp ? setModalSignUp(true) : setModalSignUp(false);
  };

  const closeModalLogin = () => {
    setModalLogin(false);
  };

  const closeModalSignUp = () => {
    setModalSignUp(false);
  };

  const showModalLogin = () => {
    setModalLogin(true);
  };

  const showModalSignUp = () => {
    setModalSignUp(true);

  }
  const handleLogOut = () => {
    props.handleLogOut();
    collapseNav();
  };

  // for active page indicator
  const [url, setUrl] = React.useState(null);
  React.useEffect(() => {
    setUrl(location.pathname);
  },[location])
  

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
          <Link to="/" className="brand--text">
            talently<span>.</span>
          </Link>
        </div>
        <div className="nav--link--wrapper">
          <ul>
            <li>
              <Link to="/" className={"nav--link" + (url === "/" ? " activepage" : "")}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/talents" className={"nav--link" + (url === "/talents" ? " activepage" : "")}>
                Talents
              </Link>
            </li>
            <li>
              <Link to="/about" className={"nav--link" + (url === "/about" ? " activepage" : "")}>
                About Us
              </Link>
            </li>

            {props.isLoggedIn ? (
              <>
                <li>
                  <Link to="/profile" className="nav--link">
                    My Profile
                  </Link>
                </li>
                <li>
                  <a href="/" className="nav--link" onClick={handleLogOut}>
                    Log Out
                  </a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a href="#1" onClick={handleModalLogin} className="nav--link">
                    Sign In
                  </a>
                </li>
                <li>
                  <a
                    href="#1"
                    onClick={handleModalSignUp}
                    className="nav--link--join"
                  >
                    Join
                  </a>
                </li>
              </>
            )}
          </ul>
          <span>
            {navControls.expandNav ? (
              <GrClose className="toggle--button" onClick={collapseNav} />
            ) : (
              <FiMenu className="toggle--button" onClick={expandNav} />
            )}
          </span>
        </div>

        {modalLogin ? (
          <Login
            handleModalLogin={handleModalLogin}
            accounts={props.accounts}
            handleLogin={props.handleLogin}
            showModalSignUp={showModalSignUp}
            closeModalLogin={closeModalLogin}
          />
        ) : (
          ""
        )}
        {modalSignUp ? (
          <SignUp
            handleModalSignUp={handleModalSignUp}
            accounts={props.accounts}
            handleSignUp={props.handleSignUp}
            showModalLogin={showModalLogin}
            closeModalSignUp={closeModalSignUp}
          />
        ) : (
          ""
        )}
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
            {props.isLoggedIn ? (
              <>
                <li>
                  <Link
                    to="/profile"
                    className="nav--link"
                    onClick={collapseNav}
                  >
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="nav--link--join"
                    onClick={handleLogOut}
                  >
                    Log Out
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a href="#1" onClick={handleModalLogin} className="nav--link">
                    Sign In
                  </a>
                </li>
                <li>
                  <a
                    href="#1"
                    onClick={handleModalSignUp}
                    className="nav--link--join"
                  >
                    Join
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
