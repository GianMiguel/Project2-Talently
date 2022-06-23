import React from "react";

export default function HunterForm(props) {

  return (
  <form action="" onSubmit={props.handleSubmit}>
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

    {/* FIRST NAME INPUT*/}
    <div className="sign--up--input--group">
      <label htmlFor="firstName" className="sign--up--label">
        First Name:
      </label>
      <input
        type="text"
        onChange={props.handleFirstName}
        className="sign--up--input"
        id="firstName"
        name="firstName"
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
        onChange={props.handleLastName}
        className="sign--up--input"
        id="lastName"
        name="lastName"
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
        onChange={props.handleCompany}
        className="sign--up--input"
        id="company"
        name="company"
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
        onChange={props.handleJobTitle}
        className="sign--up--input"
        id="jobTitle"
        name="jobTitle"
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
        onChange={props.handleEmail}
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
