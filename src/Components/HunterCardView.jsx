import React from "react";
import HunterBusinessCard from "./HunterBusinessCard";
import Pagination from "./Pagination";

export default function HunterCardView(props) {
  const user = props.user;
  const accounts = props.accounts;

  const [currentPage, setCurrentPage] = React.useState(1);
  const [huntersPerPage] = React.useState(12);

  let hunters = accounts.filter((account) =>
    user.connections.includes(account.id)
  );

  const indexOfLastHunter = currentPage * huntersPerPage;
  const indexOfFirstHunter = indexOfLastHunter - huntersPerPage;
  const currentHunters = hunters.slice(indexOfFirstHunter, indexOfLastHunter);

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

  const connectedHuntersElements = currentHunters.map((hunter) => (
    <HunterBusinessCard user={hunter} key={hunter.id} />
  ));

  return (
    <div>
      <div className="profile--connections--header">
        <h2>
          {user.connections.length > 0
            ? "Recruiters you are connected to:"
            : "No connections yet, give it some time though..."}
        </h2>
      </div>
      <div className="talent--cards--wrapper">{connectedHuntersElements}</div>
      <div className="profile--pagination--wrapper">
        <Pagination
          talentsPerPage={huntersPerPage}
          totalTalents={hunters.length}
          paginate={paginate}
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
