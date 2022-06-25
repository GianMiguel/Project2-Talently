import React from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Talents from "./Pages/Talents";
// import SignUp from "./Pages/SignUp";
// import sampleData from "./Data/data";
import sampleData2 from "./Data/data2";
// import Login from "./Pages/Login";
import Footer from "./Components/Footer";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

export default function App() {
  // STATE TO HANDLE ISLOGIN
  const [isLoggedIn, setIsLoggedin] = React.useState(false);
  // STATE TO HANDLE ACCOUNTS
  const [accounts, setAccounts] = React.useState(sampleData2);
  // STATE TO HANDLE CURRENT USER
  const [currentUser, setCurrentUser] = React.useState({
    connections: [],
    userType: "guest",
  });
  // USED FOR NAVIGATION
  const navigate = useNavigate();
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
  // User = guest
  // const currentUser = { connections: [], userType: "guest" };

  // User = talent
  // const currentUser = sampleData2[6];

  // // User = hunter
  // const currentUser = sampleData2[7];
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

  function handleLogin(account) {
    setCurrentUser(account);
    setIsLoggedin(true);
    if (account.userType === "talent") {
      navigate("/about");
    }
    if (account.userType === "hunter") {
      navigate("/talents");
    }
  }

  function handleSignUp(account) {
    // Model a new User with account input
    const newUser =
      account.userType === "hunter"
        ? {
            id: nanoid(),
            email: account.email,
            password: account.password,
            userType: "hunter",
            firstName: account.firstName,
            lastName: account.lastName,
            company: account.company,
            jobTitle: account.jobTitle,
            profileActivated: false,
            profileCard: {
              profileFirstName: "",
              profileLastName: "",
              profileJobTitle: "",
              profileEmail: "",
              profileLinkedIn: "",
              profileWebsite: "",
              profileSkills: [],
              profileBio: "",
              profileExperience: null,
              profileImage: "",
            },
            connections: [],
          }
        : {
            id: nanoid(),
            email: account.email,
            password: account.password,
            userType: "talent",
            firstName: "",
            lastName: "",
            company: "",
            jobTitle: "",
            profileActivated: false,
            profileCard: {
              profileFirstName: "",
              profileLastName: "",
              profileJobTitle: "",
              profileEmail: "",
              profileLinkedIn: "",
              profileWebsite: "",
              profileSkills: [],
              profileBio: "",
              profileExperience: null,
              profileImage: "",
            },
            connections: [],
          };

    if (account.userType === "hunter") {
      setAccounts((prevAccounts) => {
        return [...prevAccounts, newUser];
      });
    } else if (account.userType === "talent") {
      setAccounts((prevAccounts) => {
        return [...prevAccounts, newUser];
      });
    }

    setIsLoggedin(true);
    setCurrentUser(newUser);

    if (newUser.userType === "talent") {
      navigate("/about");
    }
    if (newUser.userType === "hunter") {
      navigate("/talents");
    }
  }

  return (
    <>
      <Navbar
        accounts={accounts}
        handleLogin={handleLogin}
        handleSignUp={handleSignUp}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
      />
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
      </Routes>
      <Footer />
    </>
  );
}

/* <Route path="/login" element={<Login />}></Route>
<Route path="/signup" element={<SignUp />}></Route> */
