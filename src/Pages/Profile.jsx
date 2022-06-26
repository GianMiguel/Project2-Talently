import React from "react";
import ProfileError from "../Components/ProfileError";
import AccountCard from "../Components/AccountCard";
import HunterCard from "../Components/HunterCard";
import TalentCards from "../Components/TalentCards";
import Pagination from "../Components/Pagination";

export default function Profile(props) {
  const user = props.currentUser;
  const type = user.userType;
  const accounts = props.accounts;
  const [currentPage, setCurrentPage] = React.useState(1);
  const [talentsPerPage] = React.useState(4);

  //   PREVENT GUESS USERS FROM ACCESSING THIS PAGE BY CHANGING URL
  if (props.isLoggedIn === false)
    return (
      <div className="profile--page--container">
        <ProfileError />
      </div>
    );
  let talents = accounts.filter((account) =>
    user.connections.includes(account.id)
  );
  const indexOfLastTalent = currentPage * talentsPerPage;
  const indexOfFirstTalent = indexOfLastTalent - talentsPerPage;
  const currentTalents = talents.slice(indexOfFirstTalent, indexOfLastTalent);
  // Change page
  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function handlePreviousPage() {
    setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
  }

  function handleNextPage() {
    setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
  }

  const connectedTalentsElements = currentTalents.map((talent) => (
    <TalentCards
      talent={talent}
      key={talent.id}
      currentUser={props.currentUser}
      isLoggedIn={props.isLoggedIn}
      handleConnections={props.handleConnections}
      handleDisconnections={props.handleDisconnections}
    />
  ));

  return (
    <div className="profile--page--container">
      <div className="account--info--header">
        <h2>
          Here's your profile information,{" "}
          {user.firstName || user.profileCard.profileFirstName}.
        </h2>
      </div>
      <div className="account--info--wrapper">
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
      <div className="profile--connections--wrapper">
        {type === "hunter" ? (
          <>
            <div className="profile--connections--header">
              <h2>
                {user.connections.length > 0
                  ? "Talents you are connected to:"
                  : "Go to the Talents page and start connecting to awesome talents!"}
              </h2>
            </div>
            <div className="talent--cards--wrapper">
              {connectedTalentsElements}
            </div>
            <div className="profile--pagination--wrapper">
              <Pagination
                talentsPerPage={talentsPerPage}
                totalTalents={talents.length}
                paginate={paginate}
                handlePreviousPage={handlePreviousPage}
                handleNextPage={handleNextPage}
                currentPage={currentPage}
              />
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
