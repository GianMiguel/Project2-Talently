import React from "react";

export default function HunterCard(props) {
  console.log(props);
  const user = props.user;
  //   const type = user.userType;
  //   const accounts = props.accounts;
  const [displayEdit, setDisplayEdit] = React.useState(false);
  const [credentials, setCredentials] = React.useState({
    accountEditFirstName: user.firstName,
    accountEditLastName: user.lastName,
    accountEditJobTitle: user.jobTitle,
    accountEditCompany: user.company,
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
    if (
      credentials.accountEditFirstName === "" ||
      credentials.accountEditLastName === "" ||
      credentials.accountEditJobTitle === "" ||
      credentials.accountEditCompany === ""
    ) {
      return setFormError({
        hasError: true,
        msg: "Form Fields cannot be blank",
      });
    }
    // Success
    // Submit data to app
    props.handleHunterEdit(user.id, credentials);
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
    <div className="account--card hunter--card">
      <div className="account--card--header">
        <h4>Information</h4>
      </div>
      {!displayEdit && (
        <>
          <div className="account--card--content">{`${user.firstName} ${user.lastName}`}</div>
          <div className="account--card--content">{user.email}</div>
          <div className="account--card--content">{user.jobTitle}</div>
          <div className="account--card--content">{user.company}</div>
          <div className="account--card--content">
            Talents connected to: {user.connections.length}
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
            You may edit your email in the Account Credentials section
          </div>
          <div className="account--card--content hunter--card--content">
            <label htmlFor="account--card--first--name">
              <strong>First Name:</strong>
            </label>
            <input
              type="text"
              id="account--card--first--name"
              name="accountEditFirstName"
              value={credentials.accountEditFirstName}
              size="32"
              onChange={handleChange}
            />
          </div>
          <div className="account--card--content hunter--card--content">
            <label htmlFor="account--card--last--name">
              <strong>Last Name:</strong>
            </label>
            <input
              type="text"
              id="account--card--last--name"
              name="accountEditLastName"
              value={credentials.accountEditLastName}
              size="32"
              onChange={handleChange}
            />
          </div>
          <div className="account--card--content hunter--card--content">
            <label htmlFor="account--card--job--title">
              <strong>Job Title:</strong>
            </label>
            <input
              type="text"
              id="account--card--job--title"
              name="accountEditJobTitle"
              value={credentials.accountEditJobTitle}
              size="32"
              onChange={handleChange}
            />
          </div>
          <div className="account--card--content hunter--card--content">
            <label htmlFor="account--card--comapany">
              <strong>Company:</strong>
            </label>
            <input
              type="text"
              id="account--card--comapany"
              name="accountEditCompany"
              value={credentials.accountEditCompany}
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
