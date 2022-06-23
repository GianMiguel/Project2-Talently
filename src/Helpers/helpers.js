// Validate Email
export function handleEmail(emailRef) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(emailRef.current.value);
}

// Require value
export function hasValue(input) {
  input.current.value === ""
    ? showError(input.current.name + "Notif", "This Field is Required")
    : showSuccess(input.current.name + "Notif");
}

// show the error message
export const showError = (input, message) => {
  //  Get small tag element
  let notif = document.getElementById(input);
  notif.classList.add("sign--up--error");
  notif.classList.remove("sign--up--success");
  notif.textContent = message;
};

// show the success message
export const showSuccess = (input) => {
  let notif = document.getElementById(input);
  notif.classList.remove("sign--up--error");
  notif.classList.add("sign--up--success");
  notif.textContent = "Looks Good";
};
