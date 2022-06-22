import React from "react";

export default function TalentCards(props) {
  const talent = props.talent;
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
          <button className="talent--card--btn talent--card--btn--email">
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
        <div className="talent--card--footer">
          <img src={require(`../images/twitter.png`)} alt="twitter icon" />
          <img src={require(`../images/facebook.png`)} alt="facebook icon" />
          <img src={require(`../images/instagram.png`)} alt="instagram icon" />
          <img src={require(`../images/github.png`)} alt="github icon" />
        </div>
      </div>
    </div>
  );
}
