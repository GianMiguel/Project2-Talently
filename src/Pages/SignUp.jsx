import React from "react";
import HunterForm from "../Components/HunterForm";
import TalentForm from "../Components/TalentForm";
import * as Helpers from "../Helpers/helpers";

const SignUp = () => {
  const [formShown, setFormShown] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [jobTitle, setJobTitle] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const [emailNotif, setEmailNotif] = React.useState("email");
  const [firstNameNotif, setFirstNameNotif] = React.useState("firstName");
  const [lastNameNotif, setLastNameNotif] = React.useState("lastName");
  const [companyNotif, setCompanyNotif] = React.useState("company");
  const [jobTitleNotif, setJobTitleNotif] = React.useState("jobTitle");
  const [passwordNotif, setPasswordNotif] = React.useState("password");
  const [confirmPasswordNotif, setConfirmPasswordNotif] = React.useState("confirmPassword");

  // handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    Helpers.validateEmail(email, emailNotif);
    Helpers.validatePassword(password, passwordNotif, confirmPassword, confirmPasswordNotif);
    
    if(formShown === "hunter"){
      Helpers.hasValue(firstName, firstNameNotif);
      Helpers.hasValue(lastName, lastNameNotif);
      Helpers.hasValue(company, companyNotif);
      Helpers.hasValue(jobTitle, jobTitleNotif);
    }
    
  };

  // handle Email
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailNotif(e.target.id);
  }

   // handle First Name
   const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setFirstNameNotif(e.target.name);
  }

   // handle Last Name
   const handleLastName = (e) => {
    setLastName(e.target.value);
    setLastNameNotif(e.target.name);
  }

   // handle Job Title
   const handleJobTitle = (e) => {
    setJobTitle(e.target.value);
    setJobTitleNotif(e.target.name);
  }

   // handle Company
   const handleCompany = (e) => {
    setCompany(e.target.value);
    setCompanyNotif(e.target.name);
  }

   // handle Password
   const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordNotif(e.target.name);
  }

  // handle Confirm Password
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordNotif(e.target.name);
  }

  function handleFormSelect(e) {
    if (e.target.value === "hunter") setFormShown("hunter");
    if (e.target.value === "talent") setFormShown("talent");
    setPassword("");
    setEmail("");
    setConfirmPassword("");
  }

  return (
    <div className="sign--up--container">
      <div className="sign--up--wrapper">
        <h2>Sign Up Form</h2>

        {/* RADIO */}
        <div className="sign--up--radio--wrapper">
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
            <label className="sign--up--label" htmlFor="talent">
              &nbsp;Talent
            </label>
          </div>
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
            <label className="sign--up--label" htmlFor="hunter">
              &nbsp;Hunter
            </label>
          </div>
        </div>
        {formShown === "" ? (
          ""
        ) : formShown === "hunter" ? (
          <HunterForm 
          handleEmail={handleEmail} 
          handleFirstName={handleFirstName} 
          handleLastName={handleLastName} 
          handleCompany={handleCompany} 
          handleJobTitle={handleJobTitle}
          handlePassword={handlePassword}
          handleSubmit={handleSubmit}
          handleConfirmPassword={handleConfirmPassword}
          />
        ) : (
          <TalentForm 
          handleEmail={handleEmail} 
          handlePassword={handlePassword}
          handleSubmit={handleSubmit}
          handleConfirmPassword={handleConfirmPassword}
          />
        )}

        {/* LINK FOR LOGIN */}
        <p>
          Already a member? <a href="#login">Go and login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
