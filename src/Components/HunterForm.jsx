import React from "react";

export default function HunterForm(props) {
  const handleHunterSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(e.target);
  }

  const handleHunterInputBox = (e) => {
    props.handleInputBox(e.target);
  }

  return (
  <form action="" onSubmit={handleHunterSubmit}>
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
        placeholder="youremail@email.com"
        onChange={handleHunterInputBox}
      />
      <small className="sign--up--notification" id="emailNotif"></small>
    </div>

    {/* FIRST NAME INPUT*/}
    <div className="sign--up--input--group">
      <label htmlFor="firstName" className="sign--up--label">
        First Name:
      </label>
      <input
        type="text"
        className="sign--up--input"
        id="firstName"
        name="firstName"
        onChange={handleHunterInputBox}
        placeholder="Your First Name"
      />
      <small className="sign--up--notification" id="firstNameNotif"></small>
    </div>

    {/* Last NAME INPUT*/}
    <div className="sign--up--input--group">
      <label htmlFor="lastName" className="sign--up--label">
        Last Name:
      </label>
      <input
        type="text"
        className="sign--up--input"
        id="lastName"
        name="lastName"
        onChange={handleHunterInputBox}
        placeholder="Your Last Name"
      />
      <small className="sign--up--notification" id="lastNameNotif"></small>
    </div>

    {/* COMPANY INPUT*/}
    <div className="sign--up--input--group">
      <label htmlFor="company" className="sign--up--label">
        Company:
      </label>
      <input
        type="text"
        className="sign--up--input"
        id="company"
        name="company"
        onChange={handleHunterInputBox}
        placeholder="Company"
      />
      <small className="sign--up--notification" id="companyNotif"></small>
    </div>

    {/* JOB TITLE INPUT*/}
    <div className="sign--up--input--group">
      <label htmlFor="jobTitle" className="sign--up--label">
        Job Title:
      </label>
      <input
        type="text"
        className="sign--up--input"
        id="jobTitle"
        name="jobTitle"
        onChange={handleHunterInputBox}
        placeholder="Job Title"
      />
      <small className="sign--up--notification" id="jobTitleNotif"></small>
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
        onChange={handleHunterInputBox}
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
        onChange={handleHunterInputBox}
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
