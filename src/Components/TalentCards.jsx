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
      <div className="talent--image--wrapper">
        <img
          src={require(`../images/${talent.profileCard.profileImage}.png`)}
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
        <div className="talent--card--about--wrapper">
          <h4 className="talent--card--about--header">About</h4>
          <p className="talent--card--about">{talent.profileCard.profileBio}</p>
        </div>
        <div
          className="talent--card--experience--wrapper"
          style={{ color: "white" }}
        >
          <p>
            <span className="talent--card--experience--header">
              Years of Experience:
            </span>
            <span className="talent--card--experience">
              {talent.profileCard.profileExperience}
            </span>
          </p>
        </div>
        {props.isLoggedIn && props.currentUser.userType === "hunter" && (
          <div className="talent--card--connect--wrapper">
            {!props.currentUser.connections.includes(talent.id) ? (
              <button
                className="talent--card--connect--button"
                onClick={handleConnect}
              >
                💜Connect
              </button>
            ) : (
              <button
                className="talent--card--connect--button"
                onClick={confirmDisconnection}
              >
                ❌Disconnect
              </button>
            )}
          </div>
        )}
        <div className="talent--card--footer">
          <img src={require(`../images/twitter.png`)} alt="twitter icon" />
          <img src={require(`../images/facebook.png`)} alt="facebook icon" />
          <img src={require(`../images/instagram.png`)} alt="instagram icon" />
          <img src={require(`../images/github.png`)} alt="github icon" />
        </div>
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
