import React from "react";

export default function talentForm(props) {
  const handleTalentSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(e.target);
  }

  const handleTalentInputBox = (e) => {
    props.handleInputBox(e.target);
  }

  return (
    <form action="" onSubmit={handleTalentSubmit} >
    {/* EMAIL INPUT*/}
    <div className="sign--up--input--group">
      <label htmlFor="email" className="sign--up--label">
        Email:
      </label>
      <input
        type="email"
        className="sign--up--input"
        id="email"
        name="email"
        placeholder="yourEmail@email.com"
        onChange={handleTalentInputBox}
      />
      <small className="sign--up--notification" id="emailNotif"></small>
    </div>

    {/* PASSWORD INPUT*/}
    <div className="sign--up--input--group">
      <label htmlFor="password" className="sign--up--label">
        Password:
      </label>
      <input
        type="password"
        className="sign--up--input"
        id="password"
        name="password"
        onChange={handleTalentInputBox}
        placeholder="Password"
      />
      <small className="sign--up--notification" id="passwordNotif"></small>
    </div>

    {/* CONFIRM PASSWORDT*/}
    <div className="sign--up--input--group">
      <label htmlFor="confirmPassword" className="sign--up--label">
        Confirm Password:
      </label>
      <input
        type="password"
        className="sign--up--input"
        id="confirmPassword"
        name="confirmPassword"
        onChange={handleTalentInputBox}
        placeholder="Confirm Password"
      />
      <small className="sign--up--notification" id="confirmPasswordNotif"></small>
    </div>

    <button type="submit" className="sign--up--btn">
      Sign Up
    </button>
  </form>
  )
}
