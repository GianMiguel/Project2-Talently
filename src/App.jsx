import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Talents from "./Pages/Talents";
import SignUp from "./Pages/SignUp";
import sampleData from "./Data/data";
import sampleData2 from "./Data/data2";

export default function App() {
  // STATE TO HANDLE ISLOGIN
  const [isLoggedIn, setIsLoggedin] = React.useState(true);
  // STATE TO HANDLE ACCOUNTS
  const [accounts, setAccounts] = React.useState(sampleData2);

  // TEMPORARY FUNCTIONS TO AVOID WARNING ON UNUSED VARIABLES
  // function loginSuccess() {
  //   setIsLoggedin(false);
  // }
  // loginSuccess();

  // function dummySetAccount() {
  //   setAccounts((prevAccounts) => prevAccounts);
  // }
  // dummySetAccount();

  // For Testing
  const currentUser = sampleData2[7];
  function handleConnections(currentUserId, talentId) {
    setAccounts(
      accounts.map((account) => {
        if (account.id === currentUserId) {
          account.connections.push(talentId);
        }
        if (account.id === talentId) {
          account.connections.push(currentUserId);
        }

        return account;
      })
    );
  }

  function handleDisconnections(currentUserId, talentId) {
    setAccounts(
      accounts.map((account) => {
        if (account.id === currentUserId) {
          account.connections.splice(account.connections.indexOf(talentId), 1);
        }
        if (account.id === talentId) {
          account.connections.splice(
            account.connections.indexOf(currentUserId),
            1
          );
        }

        return account;
      })
    );
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/talents"
          element={
            <Talents
              accounts={accounts}
              isLoggedIn={isLoggedIn}
              currentUser={currentUser}
              handleConnections={handleConnections}
              handleDisconnections={handleDisconnections}
            />
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </Router>
  );
}
