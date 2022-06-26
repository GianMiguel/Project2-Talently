import React from "react";
// EDIT ICON

export default function AccountCard(props) {
  const user = props.user;
  const accounts = props.accounts;
  const [displayEdit, setDisplayEdit] = React.useState(false);
  const [credentials, setCredentials] = React.useState({
    accountEditEmail: user.email,
    accountEditPassword: "",
    accountEditCPassword: "",
  });
  const [formError, setFormError] = React.useState({
    hasError: false,
    msg: "",
  });
  const [formSuccess, setFormSuccess] = React.useState({
    hasSuccess: false,
    msg: "",
  });

  function openEdit(e) {
    e.preventDefault();
    setDisplayEdit(true);
    setFormSuccess({
      hasSuccess: false,
      msg: "",
    });
  }

  function closeEdit(e) {
    e.preventDefault();
    setDisplayEdit(false);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    // filter all other accounts first and use it to compare with other account email
    const allOtherAccounts = accounts.filter(
      (account) => account.id !== user.id
    );

    // if account exists, throw error
    if (
      allOtherAccounts.filter(
        (account) => account.email === credentials.accountEditEmail
      ).length
    )
      return setFormError({
        hasError: true,
        msg: "Another account exists with this email",
      });
    // if password < 8, throw error
    if (
      credentials.accountEditPassword.length < 8 ||
      credentials.accountEditCPassword.length < 8
    )
      return setFormError({
        hasError: true,
        msg: "Password must be at least 8 characters",
      });
    // if password do not match, throw error
    if (
      credentials.accountEditPassword.length !==
      credentials.accountEditCPassword.length
    )
      return setFormError({
        hasError: true,
        msg: "Passwords must match each other",
      });
    // Success
    // Submit data to app
    props.handleAccountEdit(user.id, credentials);
    // Clean up account card
    setDisplayEdit(false);
    setFormError({
      hasError: false,
      msg: "",
    });
    setFormSuccess({
      hasSuccess: true,
      msg: "Account updated",
    });
  }
  return (
    <div className="account--card">
      <div className="account--card--header">
        <h4>Account Credentials</h4>
      </div>
      {!displayEdit && (
        <>
          <div className="account--card--content">
            <strong>Email/Username:</strong> {user.email}
          </div>
          <div className="account--card--content account--card--password--wrapper">
            <strong>Password:</strong>
            {Array.from(user.password).map(() => "*")}
          </div>
          {formSuccess.hasSuccess && (
            <div className="account--card--content account--card--success--wrapper">
              <span className="account--card--edit--success">
                {formSuccess.msg}
              </span>
            </div>
          )}
          <div className="account--card--content account--card--btn--wrapper">
            <button className="account--card--edit--btn" onClick={openEdit}>
              Edit
            </button>
          </div>
        </>
      )}
      {displayEdit && (
        <form onSubmit={handleEditSubmit}>
          <div className="account--card--content">
            <label htmlFor="account--card--email">
              <strong>Email/Username:</strong>
            </label>
            <input
              type="email"
              id="account--card--email"
              name="accountEditEmail"
              value={credentials.accountEditEmail}
              size="32"
              onChange={handleChange}
            />
          </div>
          <div className="account--card--content">
            <label htmlFor="account--card--password">
              <strong>Password:</strong>
            </label>
            <input
              type="password"
              id="account--card--password"
              name="accountEditPassword"
              size="32"
              onChange={handleChange}
            />
          </div>
          <div className="account--card--content">
            <label htmlFor="account--card--cpassword">
              <strong>Confirm password:</strong>
            </label>
            <input
              type="password"
              id="account--card--cpassword"
              name="accountEditCPassword"
              size="32"
              onChange={handleChange}
            />
          </div>
          {formError.hasError && (
            <div className="account--card--content account--card--error--wrapper">
              <span className="account--card--edit--error">
                {formError.msg}
              </span>
            </div>
          )}
          <div className="account--card--content account--card--btn--wrapper">
            <button type="submit" className="account--card--edit--btn">
              Save
            </button>
            <button className="account--card--edit--btn" onClick={closeEdit}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
