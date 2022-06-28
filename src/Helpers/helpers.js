// Require value
export function hasValue(inputValue) {
  if (inputValue.name === "termsAndCondition") {
    if (inputValue.checked === false) {
      return showError(inputValue, "This Field is Required");
    } else {
      return showSuccess(inputValue);
    }
  } else {
    if (inputValue.value === "") {
      return showError(inputValue, "This Field is Required");
    } else {
      return showSuccess(inputValue);
    }
  }
}

// show the error message
export const showError = (input, message) => {
  let notif = input.closest(".sign--up--input--group").querySelector("small");
  notif.classList.add("sign--up--error");
  notif.classList.remove("sign--up--success");
  notif.textContent = message;

  return false;
};

// show the success message
export const showSuccess = (input) => {
  let notif = input.closest(".sign--up--input--group").querySelector("small");
  notif.classList.remove("sign--up--error");
  notif.classList.add("sign--up--success");
  notif.textContent = "Looks Good";

  return true;
};

//validate password
export const validatePassword = (target, password, confirmPassword) => {
  let passwords = false;
  let passwordNotif1 = target.querySelector("#confirmPasswordNotif");
  let passwordNotif2 = target.querySelector("#passwordNotif");

  if (password.length < 8) {
    passwordNotif2.classList.add("sign--up--error");
    passwordNotif2.classList.remove("sign--up--success");
    passwordNotif2.textContent = "Minimum of 8 characters for the password";
    passwordNotif1.textContent = "";
    passwords = false;
  } else {
    passwords = true;
  }

  if (passwords === true) {
    if (password !== confirmPassword) {
      passwordNotif2.classList.add("sign--up--error");
      passwordNotif2.classList.remove("sign--up--success");
      passwordNotif1.classList.add("sign--up--error");
      passwordNotif1.classList.remove("sign--up--success");
      passwordNotif2.textContent = "Password not Match";
      passwordNotif1.textContent = "Password not Match";
      return false;
    } else {
      return true;
    }
  }
};

// className={`nav--link ${
//   navControls.page === "/" && "nav--link--active"
// }`}

export const sortString = (sort) => {
  if (sort === "experienceDown")
    return "Years of experience (Highest to lowest)";
  if (sort === "experienceUp") return "Years of experience (Lowest to highest)";
  if (sort === "nameUp") return "Name (A to Z)";
  if (sort === "nameDown") return "Name (Z to A)";
};

// format text to capitalize first letter (space)
export function fullNameFormatter(...inputs) {
  return inputs
    .map((input) => {
      return input
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");
    })
    .join(" ");
}

export function textFormatter(input) {
  if (!input) return;
  return input
    .split(" ")
    .map((word) => {
      if (word.toLowerCase() === "hr") return "HR";
      if (word.toLowerCase() === "ceo") return "CEO";
      if (word.toLowerCase() === "cto") return "CTO";
      if (word.toLowerCase() === "of") return "of";
      if (word.toLowerCase() === "a") return "a";
      if (word.toLowerCase() === "and") return "and";
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

// format skills to capitalize first letter with dash
export function fieldFormatter(input) {
  return input
    .split("-")
    .map((word) =>
      word !== "ios"
        ? word[0].toUpperCase() + word.slice(1).toLowerCase()
        : "iOS"
    )
    .join(" ");
}
