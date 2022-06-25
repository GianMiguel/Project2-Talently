import React from "react";
import ProfileError from "../Components/ProfileError";
import AccountCard from "../Components/AccountCard";
import HunterCard from "../Components/HunterCard";

export default function Profile(props) {
  const user = props.currentUser;
  const type = user.userType;

  //   PREVENT GUESS USERS FROM ACCESSING THIS PAGE BY CHANGING URL
  if (props.isLoggedIn === false)
    return (
      <div className="profile--page--container">
        <ProfileError />
      </div>
    );
  return (
    <div className="profile--page--container">
      {type === "hunter" && (
        <HunterCard
          user={user}
          accounts={props.accounts}
          handleHunterEdit={props.handleHunterEdit}
        />
      )}
      <AccountCard
        user={user}
        accounts={props.accounts}
        handleAccountEdit={props.handleAccountEdit}
      />
    </div>
  );
}
