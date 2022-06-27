import React from "react";

const Login = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email, password };
    const accounts = props.accounts;
    const accountArray = accounts.filter(
      (account) => account.email === data.email
    );
    // ERROR - No account found
    if (!accountArray.length) {
      return setErrorMessage("No account found");
    }
    // ERROR - Wrong password
    const [account] = accountArray;
    if (account.password !== data.password)
      return setErrorMessage("Wrong password");
    // SUCCESS - Account found and password is correct
    props.handleLogin(account);
    props.closeModalLogin();
  };

  const showSignUpModal = () => {
    props.closeModalLogin();
    props.showModalSignUp();
  };

  function demoRecruiter() {
    props.demoRecruiter();
    props.closeModalLogin();
  }

  function demoTalent() {
    props.demoTalent();
    props.closeModalLogin();
  }
  return (
    <div className="signin--container">
      <div className="signin--wrapper">
        <button onClick={props.handleModalLogin} className="signin--close">
          &times;
        </button>
        <h1>
          talently<span>.</span>
        </h1>

        {errorMessage === "" ? (
          ""
        ) : (
          <p className="signin--error--message">{errorMessage}</p>
        )}
        <form action="" onSubmit={handleSubmit}>
          {/* EMAIL INPUT*/}
          <div className="signin--input--group">
            <label htmlFor="email" className="signin--label">
              Email:
            </label>
            <input
              type="email"
              className="signin--input"
              id="email"
              name="email"
              onChange={handleEmail}
              placeholder="yourEmail@email.com"
              required
            />
            <small className="signin--notification" id="emailNotif"></small>
          </div>

          {/* PASSWORD INPUT*/}
          <div className="signin--input--group">
            <label htmlFor="password" className="signin--label">
              Password:
            </label>
            <input
              type="password"
              className="signin--input"
              id="password"
              name="password"
              onChange={handlePassword}
              placeholder="Password"
              required
            />
            <small className="signin--notification" id="passwordNotif"></small>
          </div>

          <button type="submit" className="signin--btn">
            Login
          </button>
        </form>
        <button
          type="button"
          className="signin--btn demo--btn"
          onClick={demoRecruiter}
        >
          Demo <span className="demo--brand--text">talently</span>
          <span className="demo--brand--dot">.</span> as a Recruiter
        </button>
        <button
          type="button"
          className="signin--btn demo--btn"
          onClick={demoTalent}
        >
          Demo <span className="demo--brand--text">talently</span>
          <span className="demo--brand--dot">.</span> as a Talent
        </button>
        <p>or</p>
        {/* LINK FOR LOGIN */}
        <p>
          Don't have an account yet?{" "}
          <a href="#signUp" onClick={showSignUpModal}>
            Sign up instead
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
