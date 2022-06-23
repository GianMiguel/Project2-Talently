
  // Validate Email
  export function validateEmail(email, notif) {
    email === ""
      ? showError(notif + "Notif", "This Field is Required")
      : showSuccess(notif + "Notif");

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  // Validate Password
  export function validatePassword(password, notif1, confirmPassword, notif2){

    if(password === ""){
      showError(notif1 + "Notif", "This Field is Required");
    }else if(confirmPassword === ""){
      showError(notif2 + "Notif", "This Field is Required");
    }else if(confirmPassword !== password){
      showError(notif1 + "Notif", "Not Match");
    }else{  
      showSuccess(notif1 + "Notif");
      showSuccess(notif2 + "Notif");
    }

    
  }

  // Require value
  export function hasValue(inputValue, notif) {
    inputValue === ""
      ? showError(notif + "Notif", "This Field is Required")
      : showSuccess(notif + "Notif");
  }

  // show the error message
  export  const showError = (input, message) => {
    //  Get small tag element
    let notif = document.getElementById(input);
    notif.classList.add("sign--up--error");
    notif.classList.remove("sign--up--success");
    notif.textContent = message;

    return false;
  };

  // show the success message
  export  const showSuccess = (input) => {
    let notif = document.getElementById(input);
    notif.classList.remove("sign--up--error");
    notif.classList.add("sign--up--success");
    notif.textContent = "Looks Good";

    return true;
  };
