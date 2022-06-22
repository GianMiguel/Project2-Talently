import React, { useRef, useState, useEffect } from 'react';

const SignUp = () => {

  const emailRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const userTypeRef = useRef(null);
  const companyRef = useRef(null);
  const jobTitleRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    handleEmail(emailRef);
    hasValue(emailRef);
    hasValue(firstNameRef);
    hasValue(lastNameRef);
    hasValue(companyRef);
    hasValue(jobTitleRef);
    hasValue(passwordRef);

  }

  // Validate Email
  function handleEmail(emailRef){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailRef.current.value);
  }

  // Require value
  function hasValue(input){
    input.current.value === '' ? showError(input.current.name + "Notif", 'This Field is Required') : showSuccess(input.current.name + "Notif");
  }

  // show the error message
  const showError = (input, message) => {
  //  Get small tag element 
   let notif = document.getElementById(input);
   notif.classList.add('sign--up--error');
   notif.classList.remove('sign--up--success');
   notif.textContent = message;
   
  };

  // show the success message
  const showSuccess = (input) => {
   let notif = document.getElementById(input);
   notif.classList.remove('sign--up--error');
   notif.classList.add('sign--up--success');
   notif.textContent = "Looks Good";
  }

  return (
    <div className='sign--up--container'>
        <div className='sign--up--wrapper'>
            <h2>Sign Up Form</h2>
            {/* SIGN UP FORM */}
            <form action="" onSubmit={handleSubmit}>
              
              {/* RADIO */}
              <div className='sign--up--radio--wrapper'> 
                <div className='sign--up--radio--group'>
                    <input className="" ref={userTypeRef} type="radio" name="signup" id="talent" value="talent" required/>
                    <label className="sign--up--label" htmlFor="talent">
                      &nbsp;Talent
                    </label>
                </div>
                <div className='sign--up--radio--group'>
                    <input className="" ref={userTypeRef} type="radio" name="signup" id="hunter" value="hunter" required/>
                    <label className="sign--up--label" htmlFor="hunter">
                    &nbsp;Hunter
                    </label>
                </div>
              </div>

              {/* EMAIL INPUT*/}
              <div className='sign--up--input--group'>
                <label htmlFor="email" className="sign--up--label">Email:</label>
                <input type="email" ref={emailRef} className='sign--up--input' id='email' name='email' placeholder='yourEmail@email.com'/>
                <small className='sign--up--notification' id="emailNotif"></small>
              </div>

              {/* FIRST NAME INPUT*/}
              <div className='sign--up--input--group'>
                <label htmlFor="firstName" className="sign--up--label">First Name:</label>
                <input type="text" ref={firstNameRef} className='sign--up--input' id='firstName' name='firstName' placeholder='Your First Name' />
                <small className='sign--up--notification' id='firstNameNotif'></small>
              </div>

              {/* Last NAME INPUT*/}
              <div className='sign--up--input--group'>
                <label htmlFor="lastName" className="sign--up--label">Last Name:</label>
                <input type="text" ref={lastNameRef} className='sign--up--input' id='lastName' name='lastName' placeholder='Your Last Name' />
                <small className='sign--up--notification' id='lastNameNotif'></small>
              </div>

              {/* COMPANY INPUT*/}
              <div className='sign--up--input--group'>
                <label htmlFor="company" className="sign--up--label">Company:</label>
                <input type="text" ref={companyRef} className='sign--up--input' id='company' name='company' placeholder='Company' />
                <small className='sign--up--notification' id='companyNotif'></small>
              </div>

              {/* JOB TITLE INPUT*/}
              <div className='sign--up--input--group'>
                <label htmlFor="jobTitle" className="sign--up--label">Job Title:</label>
                <input type="text" ref={jobTitleRef} className='sign--up--input' id='jobTitle' name='jobTitle' placeholder='Job Title' />
                <small className='sign--up--notification' id='jobTitleNotif'></small>
              </div>

              {/* PASSWORD INPUT*/}
              <div className='sign--up--input--group'>
                <label htmlFor="password" className="sign--up--label">Password:</label>
                <input type="password" ref={passwordRef} className='sign--up--input' id='password' name='password' placeholder='Password' />
                <small className='sign--up--notification' id='passwordNotif'></small>
              </div>

              <button type='submit' className='sign--up--btn'>Sign Up</button>
              
            </form>
            {/* LINK FOR LOGIN */}
            <p>Already a member? <a href="#">Go and login</a></p>
            


        </div>
    </div>
  )
}

export default SignUp