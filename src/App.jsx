import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import queries from "./Data/queries";
import Profile from "./Pages/Profile";

export default function App() {
  // WRITE ACCOUNTS DATA TO LOCAL STORAGE
  if (!localStorage.talentlyAccounts) {
    const accountData = JSON.stringify(sampleData2);
    localStorage.setItem("talentlyAccounts", accountData);
  }

  if (!localStorage.talentlyCurrentUser) {
    const defaultUser = {
      connections: [],
      userType: "guest",
    };
    localStorage.setItem("talentlyCurrentUser", JSON.stringify(defaultUser));
  }

  // STATE TO HANDLE ACCOUNTS
  const [accounts, setAccounts] = React.useState(
    JSON.parse(localStorage.getItem("talentlyAccounts"))
  );

  // OVERWRITE LOCAL STORAGE TALENTLY ACCOUNTS EVERY TIME ACCOUNTS IN STATES CHANGES
  React.useEffect(() => {
    localStorage.setItem("talentlyAccounts", JSON.stringify(accounts));
  }, [accounts]);
  // STATE TO HANDLE CURRENT USER
  const [currentUser, setCurrentUser] = React.useState(
    JSON.parse(localStorage.getItem("talentlyCurrentUser"))
  );

  React.useEffect(() => {
    localStorage.setItem("talentlyCurrentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  // STATE TO HANDLE ISLOGIN
  const [isLoggedIn, setIsLoggedin] = React.useState(
    JSON.parse(localStorage.getItem("talentlyCurrentUser")).userType === "guest"
      ? false
      : true
  );

  // STATE TO HANDLE SEARCH QUERIES
  const [searchQuery, setSearchQuery] = React.useState({
    searchTerm: "",
    searchKey: "",
    isValid: false,
    initiateSearch: false,
  });

  // REWRITE LOCAL STORAGE DATA EVERY TIME SOMETHING CHANGES IN ACCOUNTS
  React.useEffect(() => {
    localStorage.setItem("talentlyAccounts", JSON.stringify(accounts));
  }, [accounts]);

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

  function handleSearch(searchKey) {
    // search key split, only use first word as search term
    const searchTerms = searchKey.split(" ");
    // Flatten query array, containing each word
    const queryKeywords = queries.flatMap((searchKey) => searchKey.split("-"));
    // Invalid search query so set the searchQuery to invalid then redirect to TALENTS, ending the function here
    if (!queryKeywords.includes(searchTerms[0])) {
      setSearchQuery({
        searchTerm: searchKey,
        searchKey: searchKey,
        isValid: false,
        initiateSearch: true,
      });
      return navigate("/talents");
    }
    // Set to valid search, pass as props to Talents, then redirect
    setSearchQuery({
      searchTerm: searchKey,
      searchKey: queries.filter((query) => query.includes(searchTerms[0])),
      isValid: true,
      initiateSearch: true,
    });
    // return console.log(searchQuery.searchKey);
    // REDIRECT TO TALENTS PAGE
    navigate("/talents");
  }

  function clearSearch() {
    setSearchQuery({
      searchTerm: "",
      searchKey: "",
      isValid: false,
      initiateSearch: false,
    });
  }
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
    const currentUserAccount = accounts.filter(
      (account) => account.id === currentUserId
    )[0];
    setCurrentUser({
      ...currentUserAccount,
      connections: [...currentUserAccount.connections],
    });
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
    const currentUserAccount = accounts.filter(
      (account) => account.id === currentUserId
    )[0];
    setCurrentUser({
      ...currentUserAccount,
      connections: [...currentUserAccount.connections],
    });
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

  function handleLogOut() {
    setCurrentUser({
      connections: [],
      userType: "guest",
    });
    setIsLoggedin(false);
    navigate("/");
  }

  function handleAccountEdit(userId, data) {
    setAccounts((prevAccounts) => {
      return prevAccounts.map((account) => {
        if (account.id === userId) {
          return {
            ...account,
            email: data.accountEditEmail.toLowerCase(),
            password: data.accountEditPassword,
          };
        } else return account;
      });
    });

    const account = accounts.filter((account) => account.id === userId)[0];
    setCurrentUser({
      ...account,
      email: data.accountEditEmail.toLowerCase(),
      password: data.accountEditPassword,
    });
  }

  function handleHunterEdit(userId, data) {
    setAccounts((prevAccounts) => {
      return prevAccounts.map((account) => {
        if (account.id === userId) {
          return {
            ...account,
            firstName: data.accountEditFirstName.toLowerCase(),
            lastName: data.accountEditLastName.toLowerCase(),
            jobTitle: data.accountEditJobTitle.toLowerCase(),
            company: data.accountEditCompany.toLowerCase(),
          };
        } else return account;
      });
    });

    const account = accounts.filter((account) => account.id === userId)[0];
    setCurrentUser({
      ...account,
      firstName: data.accountEditFirstName.toLowerCase(),
      lastName: data.accountEditLastName.toLowerCase(),
      jobTitle: data.accountEditJobTitle.toLowerCase(),
      company: data.accountEditCompany.toLowerCase(),
    });
  }

  function handleTalentEdit(userId, data) {
    const image = data.profileImage
      ? data.profileImage
      : "placeholder-image.png";
    setAccounts((prevAccounts) => {
      return prevAccounts.map((account) => {
        if (account.id === userId) {
          return {
            ...account,
            profileActivated: true,
            profileCard: {
              profileFirstName: data.profileFirstName,
              profileLastName: data.profileLastName,
              profileJobTitle: data.profileJobTitleName,
              profileEmail: data.profileEmail,
              profileLinkedIn: data.profileLinkedIn,
              profileWebsite: data.profileWebsite,
              profileSkills: data.profileSkills,
              profileBio: data.profileBio,
              profileExperience: +data.profileExperience,
              profileImage: image,
            },
          };
        } else return account;
      });
    });

    const account = accounts.filter((account) => account.id === userId)[0];
    setCurrentUser({
      ...account,
      profileActivated: true,
      profileCard: {
        profileFirstName: data.profileFirstName,
        profileLastName: data.profileLastName,
        profileJobTitle: data.profileJobTitleName,
        profileEmail: data.profileEmail,
        profileLinkedIn: data.profileLinkedIn,
        profileWebsite: data.profileWebsite,
        profileSkills: data.profileSkills,
        profileBio: data.profileBio,
        profileExperience: +data.profileExperience,
        profileImage: image,
      },
    });
  }

  return (
    <>
      <Navbar
        accounts={accounts}
        handleLogin={handleLogin}
        handleSignUp={handleSignUp}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        handleLogOut={handleLogOut}
      />
      <Routes>
        <Route path="/" element={<Home handleSearch={handleSearch} />}></Route>
        <Route
          path="/talents"
          element={
            <Talents
              accounts={accounts}
              isLoggedIn={isLoggedIn}
              currentUser={currentUser}
              handleConnections={handleConnections}
              handleDisconnections={handleDisconnections}
              searchQuery={searchQuery}
              clearSearch={clearSearch}
            />
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/profile"
          element={
            <Profile
              currentUser={currentUser}
              accounts={accounts}
              isLoggedIn={isLoggedIn}
              handleAccountEdit={handleAccountEdit}
              handleHunterEdit={handleHunterEdit}
              handleTalentEdit={handleTalentEdit}
              handleConnections={handleConnections}
              handleDisconnections={handleDisconnections}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

/* <Route path="/login" element={<Login />}></Route>
<Route path="/signup" element={<SignUp />}></Route> */
