import React from "react";

export default function TalentCards(props) {
  const talent = props.talent;
  const [displayOverlay, setDisplayOverlay] = React.useState({
    disconnection: false,
    emailConnected: props.currentUser.connections.includes(talent.id)
      ? true
      : false,
    emailDisplay: false,
  });

  function handleConnect() {
    props.handleConnections(props.currentUser.id, talent.id);
    setDisplayOverlay((prevDisplayOverlay) => ({
      ...prevDisplayOverlay,
      emailConnected: !prevDisplayOverlay.emailConnected,
    }));
  }

  function handleDisconnect() {
    props.handleDisconnections(props.currentUser.id, talent.id);
    setDisplayOverlay((prevDisplayOverlay) => ({
      ...prevDisplayOverlay,
      disconnection: false,
    }));
  }

  function confirmDisconnection() {
    setDisplayOverlay((prevDisplayOverlay) => ({
      disconnection: true,
      emailConnected: !prevDisplayOverlay.emailConnected,
    }));
  }

  function cancelDisconnection() {
    setDisplayOverlay((prevDisplayOverlay) => ({
      ...prevDisplayOverlay,
      disconnection: false,
    }));
  }

  function handleEmail() {
    setDisplayOverlay((prevDisplayOverlay) => ({
      ...prevDisplayOverlay,
      emailDisplay: true,
    }));
  }

  function handleEmailOverlay(e) {
    e.preventDefault();
    setDisplayOverlay((prevDisplayOverlay) => ({
      ...prevDisplayOverlay,
      emailDisplay: false,
    }));
  }

  function handleFormSubmit(e) {
    e.target.submit();
    setDisplayOverlay((prevDisplayOverlay) => ({
      ...prevDisplayOverlay,
      emailDisplay: false,
    }));
  }
  return (
    <div className="talent--card">
      <div className="talent--card--background"></div>
      <div className="talent--image--wrapper">
        <img
          src={require(`../images/${talent.profileCard.profileImage}`)}
          alt={talent.profileCard.profileFirstName}
        />
      </div>
      <div className="talent--card--info">
        <div className="talent--card--header">
          <h4 className="talent--card--name">{`${talent.profileCard.profileFirstName} ${talent.profileCard.profileLastName}`}</h4>
          <h4 className="talent--card--role">
            {talent.profileCard.profileJobTitle}
          </h4>
          <h4 className="talent--card--website">
            {talent.profileCard.profileWebsite}
          </h4>
        </div>
        <div className="talent--card--button--wrapper">
          <button
            className="talent--card--btn talent--card--btn--email"
            onClick={handleEmail}
          >
            <span className="talent--card--btn--logo">
              <img src={require(`../images/email.png`)} alt="email logo" />
            </span>
            Email
          </button>
          <button className="talent--card--btn talent--card--btn--linkedin">
            <span className="talent--card--btn--logo">
              <img
                src={require(`../images/linkedin.png`)}
                alt="LinkedIn logo"
              />
            </span>
            LinkedIn
          </button>
        </div>
        <div className="talent--card--experience--wrapper">
          <p>
            <span className="talent--card--experience">
              {talent.profileCard.profileExperience === 0
                ? "Entry-level and job ready"
                : `${talent.profileCard.profileExperience} year${
                    talent.profileCard.profileExperience === 1 ? "" : "s"
                  } of experience`}
            </span>
          </p>
        </div>
        <div className="talent--card--about--wrapper">
          <h4 className="talent--card--about--header">About</h4>
          <p className="talent--card--about">{talent.profileCard.profileBio}</p>
        </div>

        <h4 className="talent--card--fields--header">
          Field{talent.profileCard.profileSkills.length === 1 ? "" : "s"}
        </h4>
        <div className="talent--card--fields--wrapper">
          {talent.profileCard.profileSkills.map((field, i) => (
            <p key={i} className="talent--card--fields">
              {field}
            </p>
          ))}
        </div>

        {props.isLoggedIn && props.currentUser.userType === "hunter" && (
          <div className="talent--card--connect--wrapper">
            {!props.currentUser.connections.includes(talent.id) ? (
              <button
                className="talent--card--connect--button"
                onClick={handleConnect}
              >
                Connect to this Talent
              </button>
            ) : (
              <button
                className="talent--card--connect--button"
                onClick={confirmDisconnection}
              >
                Disconnect from this Talent
              </button>
            )}
          </div>
        )}
      </div>
      {displayOverlay.disconnection && (
        <div className="talent--card--delete--overlay">
          <p className="talent--card--delete--warning">
            Please confirm disconnection.
          </p>
          <button
            className="talent--card--delete--btn"
            onClick={handleDisconnect}
          >
            Confirm
          </button>
          <button
            className="talent--card--delete--btn"
            onClick={cancelDisconnection}
          >
            Cancel
          </button>
        </div>
      )}
      {displayOverlay.emailDisplay && (
        <div className="talent--card--email--overlay">
          {displayOverlay.emailConnected ? (
            <form
              className="talent--card--form"
              action={`mailto:${talent.profileCard.profileEmail}`}
              method="post"
              encType="text/plain"
              onSubmit={handleFormSubmit}
            >
              Name:
              <input type="text" name="name" />
              E-mail:
              <input type="text" name="mail" />
              Comment:
              <input type="text" name="comment" size="50" />
              <input type="submit" value="Send" />
              <input type="reset" value="Reset" />
              <button type="button" onClick={handleEmailOverlay}>
                Cancel
              </button>
            </form>
          ) : (
            <>
              <p className="talent--card--email--warning">
                {props.isLoggedIn
                  ? "Please connect to this Talent first."
                  : "Please login first."}
              </p>
              <button
                className="talent--card--email--btn"
                onClick={handleEmailOverlay}
              >
                Okay
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
