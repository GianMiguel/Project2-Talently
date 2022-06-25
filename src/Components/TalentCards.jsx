import React from "react";
import { BsFillBookmarkStarFill } from "react-icons/bs";

export default function TalentCards(props) {
  const talent = props.talent;
  const [displayOverlay, setDisplayOverlay] = React.useState({
    disconnection: false,
    emailConnected: props.currentUser.connections.includes(talent.id)
      ? true
      : false,
    emailDisplay: false,
    linkedInDisplay: false,
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
      emailConnected: !prevDisplayOverlay.emailConnected,
      disconnection: false,
    }));
  }

  function confirmDisconnection() {
    setDisplayOverlay((prevDisplayOverlay) => ({
      ...prevDisplayOverlay,
      disconnection: true,
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

  function handleLinkedIn() {
    setDisplayOverlay((prevDisplayOverlay) => ({
      ...prevDisplayOverlay,
      linkedInDisplay: true,
    }));
  }

  function handleLinkedInOverlay() {
    setDisplayOverlay((prevDisplayOverlay) => ({
      ...prevDisplayOverlay,
      linkedInDisplay: false,
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
      <div className="talent--card--background">
        {displayOverlay.emailConnected && (
          <span>
            <BsFillBookmarkStarFill className="talent--connected" />
          </span>
        )}
      </div>
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
          <button
            className="talent--card--btn talent--card--btn--linkedin"
            onClick={handleLinkedIn}
          >
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

        {props.currentUser.userType === "guest" && (
          <div className="talent--card--connect--wrapper">
            <button
              className="talent--card--connect--button"
              onClick={handleEmail}
            >
              Login or sign up to connect
            </button>
          </div>
        )}

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
          <div className="talent--card--delete--btn--wrappers">
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
              <label htmlFor="name">Your name: </label>
              <input
                type="text"
                name="name"
                defaultValue={`${props.currentUser.firstName} ${props.currentUser.lastName}`}
              />
              E-mail:
              <input
                type="text"
                name="mail"
                defaultValue={props.currentUser.email}
              />
              Comment:
              <textarea type="text" name="comment" size="20" />
              <div className="talent--card--delete--btn--wrappers">
                <input
                  className="talent--card--form--buttons"
                  type="submit"
                  value="Send"
                />
                <input
                  className="talent--card--form--buttons"
                  type="reset"
                  value="Reset"
                />
                <button type="button" onClick={handleEmailOverlay}>
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <>
              <p className="talent--card--email--warning">
                {props.isLoggedIn
                  ? props.currentUser.userType === "hunter"
                    ? "Please connect to this Talent first."
                    : props.currentUser.userType === "talent"
                    ? "Sorry, this feature is only available for recruiters"
                    : "Sign up or log in to use this feature"
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
      {displayOverlay.linkedInDisplay && (
        <div className="talent--card--email--overlay">
          {displayOverlay.emailConnected ? (
            <>
              <a
                href="https://www.linkedin.com/login"
                target="_blank"
                className="talent--card--linkedin--redirect"
              >
                Go to LinkedIn
              </a>
              <button
                className="talent--card--email--btn"
                onClick={handleLinkedInOverlay}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <p className="talent--card--email--warning">
                {props.isLoggedIn
                  ? props.currentUser.userType === "hunter"
                    ? "Please connect to this Talent first."
                    : props.currentUser.userType === "talent"
                    ? "Sorry, this feature is only available for recruiters"
                    : "Sign up or log in to use this feature"
                  : "Please login first."}
              </p>
              <button
                className="talent--card--email--btn"
                onClick={handleLinkedInOverlay}
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
