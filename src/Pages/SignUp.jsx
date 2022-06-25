import React from "react";
import HunterForm from "../Components/HunterForm";
import TalentForm from "../Components/TalentForm";
import { Link } from "react-router-dom";
import * as Helpers from "../Helpers/helpers";

const SignUp = (props) => {
  const [formShown, setFormShown] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [jobTitle, setJobTitle] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  // handle Submit
  const handleSubmit = (e) => {
    let valid = true;
    e.querySelectorAll("input").forEach((input) => {
      // Verify that each input field contains a value.
      let inputValidation = Helpers.hasValue(input);
      if(inputValidation === false) valid = false;
    });

    // Validate Password
    let passwordValid = Helpers.validatePassword(e, password, confirmPassword);
    if(passwordValid === false) valid = false;

    if(valid === true){
      let userType = formShown;
      let account = {email, password, firstName, lastName, company, jobTitle, userType};
      
      // Submit Data
      console.log(account);
      }
      
  };

  
  const handleInputBox = (target) => {
    if(target.name === "email") setEmail(target.value);
    if(target.name === "password") setPassword(target.value);
    if(target.name === "firstName") setFirstName(target.value);
    if(target.name === "lastName") setLastName(target.value);
    if(target.name === "company") setCompany(target.value);
    if(target.name === "jobTitle") setJobTitle(target.value);
    if(target.name === "confirmPassword") setConfirmPassword(target.value);
  }


  function handleFormSelect(e) {
    if (e.target.value === "hunter") setFormShown("hunter");
    if (e.target.value === "talent") setFormShown("talent");
  }

  return (
    <div className="sign--up--container">
      <div className="sign--up--wrapper">
      <button className="sign--up--close" onClick={props.handleModalSignUp}>&times;</button>

        <p className="sign--up--tittle">Join <span className="logo--name">talently<span className="logo--period">.</span></span> as? </p>

        {/* RADIO */}
        <div className="sign--up--radio--wrapper">
          <div className="sign--up--radio--group">
            <input
              className=""
              // ref={userTypeRef}
              type="radio"
              name="signup"
              id="hunter"
              value="hunter"
              required
              onChange={handleFormSelect}
            />
            <label className={formShown == "hunter" ? "sign--up--highlight" : "" + "sign--up--label"} htmlFor="hunter">
              &nbsp;Recruiter
            </label>
          </div>
          <div className="sign--up--radio--group">
            <input
              className=""
              // ref={userTypeRef}
              type="radio"
              name="signup"
              id="talent"
              value="talent"
              required
              onChange={handleFormSelect}
            />
            <label className={formShown == "talent" ? "sign--up--highlight" : "" + "sign--up--label"} htmlFor="talent">
              &nbsp;Talent
            </label>
          </div>
          
        </div>
        {formShown === "" ? (
          ""
        ) : formShown === "hunter" ? (
          <HunterForm 
          handleSubmit={handleSubmit}
          handleInputBox={handleInputBox}
          />
        ) : (
          <TalentForm 
          handleSubmit={handleSubmit}
          handleInputBox={handleInputBox}
          />
        )}

        {/* LINK FOR LOGIN */}
        <p className="sign--up--footer">
          Already a member? <a href="#login" onClick={props.handleModalSignUp}>Login instead</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
