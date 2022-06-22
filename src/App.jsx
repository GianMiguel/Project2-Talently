import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Talents from "./Pages/Talents";
import SignUp from "./Pages/SignUp";
import sampleData from "./Data/data";

export default function App() {
  // STATE TO HANDLE ISLOGIN
  const [isLoggedIn, setIsLoggedin] = React.useState(false);
  // STATE TO HANDLE ACCOUNTS
  const [accounts, setAccounts] = React.useState(sampleData);

  // TEMPORARY FUNCTIONS TO AVOID WARNING ON UNUSED VARIABLES
  // function loginSuccess() {
  //   setIsLoggedin(false);
  // }
  // loginSuccess();

  // function dummySetAccount() {
  //   setAccounts((prevAccounts) => prevAccounts);
  // }
  // dummySetAccount();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/talents"
          element={<Talents accounts={accounts} isLoggedIn={isLoggedIn} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </Router>
  );
}
