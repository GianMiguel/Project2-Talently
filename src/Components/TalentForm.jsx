import React from "react";

export default function talentForm(props) {
  return (
    <form action="" onSubmit={props.handleSubmit} >
    {/* EMAIL INPUT*/}
    <div className="sign--up--input--group">
      <label htmlFor="email" className="sign--up--label">
        Email:
      </label>
      <input
        type="email"
        onChange={props.handleEmail}
        className="sign--up--input"
        id="email"
        name="email"
        placeholder="yourEmail@email.com"
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
        onChange={props.handlePassword}
        className="sign--up--input"
        id="password"
        name="password"
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
        onChange={props.handleConfirmPassword}
        className="sign--up--input"
        id="confirmPassword"
        name="confirmPassword"
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
