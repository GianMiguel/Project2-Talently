import React from "react";
import HunterForm from "../Components/HunterForm";
import TalentForm from "../Components/TalentForm";

const SignUp = () => {
  const [formShown, setFormShown] = React.useState("");

  // const emailRef = React.useRef(null);
  // const firstNameRef = React.useRef(null);
  // const lastNameRef = React.useRef(null);
  // const userTypeRef = React.useRef(null);
  // const companyRef = React.useRef(null);
  // const jobTitleRef = React.useRef(null);
  // const passwordRef = React.useRef(null);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   handleEmail(emailRef);
  //   hasValue(emailRef);
  //   hasValue(firstNameRef);
  //   hasValue(lastNameRef);
  //   hasValue(companyRef);
  //   hasValue(jobTitleRef);
  //   hasValue(passwordRef);
  // };

  // Validate Email
  function handleEmail(emailRef) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailRef.current.value);
  }

  // Require value
  function hasValue(input) {
    input.current.value === ""
      ? showError(input.current.name + "Notif", "This Field is Required")
      : showSuccess(input.current.name + "Notif");
  }

  // show the error message
  const showError = (input, message) => {
    //  Get small tag element
    let notif = document.getElementById(input);
    notif.classList.add("sign--up--error");
    notif.classList.remove("sign--up--success");
    notif.textContent = message;
  };

  // show the success message
  const showSuccess = (input) => {
    let notif = document.getElementById(input);
    notif.classList.remove("sign--up--error");
    notif.classList.add("sign--up--success");
    notif.textContent = "Looks Good";
  };

  function handleFormSelect(e) {
    if (e.target.value === "hunter") setFormShown("hunter");
    if (e.target.value === "talent") setFormShown("talent");
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
          <HunterForm />
        ) : (
          <TalentForm />
        )}

        {/* LINK FOR LOGIN */}
        <p>
          Already a member? <a href="#">Go and login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
