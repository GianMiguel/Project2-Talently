import React from 'react';
import { Link } from "react-router-dom";

const Login = (props) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

const handleEmail = (e) => {
    setEmail(e.target.value);
}

const handlePassword = (e) => {
    setPassword(e.target.value);
}

// handle Submit
const handleSubmit = (e) => {
   e.preventDefault();
    let data = {email, password};
    console.log(data);

  };

  return (
    <div className="signin--container">
      <div className="signin--wrapper">
      <button onClick={props.handleModalLogin} className="signin--close" >&times;</button>
        <h1>talently<span>.</span></h1>
        <h2>Login to your talently account</h2>
        <p className='signin--error--message'>Error message here</p>
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
                    placeholder="youremail@email.com"
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
        
        <p>or</p>
        {/* LINK FOR LOGIN */}
        <p>
         Don't have an account yet? <a href='#signUp' >Sign up instead</a>
        </p>
      </div>
    </div>
  )
}

export default Login