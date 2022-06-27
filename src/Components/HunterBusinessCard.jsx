import React from "react";
import * as Helpers from "../Helpers/helpers";

export default function HunterBusinessCard(props) {
  const user = props.user;
  //   const type = user.userType;
  //   const accounts = props.accounts;

  return (
    <div className="account--card hunter--card">
      <div className="account--card--header">
        <div className="talent--card--company">
          {Helpers.textFormatter(user.company)}
        </div>
      </div>
      <div className="talent--card--header">
        <div className="talent--card--name hunter--name">
          {Helpers.fullNameFormatter(user.firstName, user.lastName)}
        </div>
        <div className="talent--card--role">
          {Helpers.textFormatter(user.jobTitle)}
        </div>

        <div className="talent--card--website">{user.email}</div>
      </div>
    </div>
  );
}
