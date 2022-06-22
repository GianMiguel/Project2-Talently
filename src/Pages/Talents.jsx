import React from "react";
import TalentCards from "../Components/TalentCards";
import Pagination from "../Components/Pagination";
import SortAndFilter from "../Components/SortAndFilter";

export default function Talents(props) {
  const [filters, setFilters] = React.useState([]);
  const [sort, setSort] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [talentsPerPage] = React.useState(3);

  const talents = props.accounts.filter(
    (account) => account.userType === "talent"
  );

  function handleFilterBox(target) {
    if (target.name === "all") {
      if (target.checked) {
        target
          .closest(".talents--page--view--card")
          .querySelectorAll("input")
          .forEach((input, i) => {
            if (input.name !== "all") {
              input.checked = false;
            }
          });
      }
      setFilters([]);
    } else if (target.name !== "all") {
      target
        .closest(".talents--page--view--card")
        .querySelector(`input[name="all"]`).checked = false;
      if (target.checked)
        setFilters((prevFilters) => [...prevFilters, target.name]);
      if (!target.checked)
        setFilters((prevFilters) =>
          prevFilters.filter((filter) => filter !== target.name)
        );
    }
    // RESET TO PAGE ONE
    setCurrentPage(1);
  }

  function handleSort(target) {
    setSort(target.value);
  }

  let filteredTalents;
  filteredTalents = !filters.length
    ? talents
    : talents.filter((talent) => {
        return talent.profileCard.profileSkills.some((skill) =>
          filters.includes(skill)
        );
      });
  let filteredAndSortedTalents;
  if (sort === "") {
    filteredAndSortedTalents = filteredTalents;
  } else if (sort === "experienceDown") {
    filteredAndSortedTalents = filteredTalents
      .slice()
      .sort(
        (a, b) =>
          b.profileCard.profileExperience - a.profileCard.profileExperience
      );
  } else if (sort === "experienceUp") {
    filteredAndSortedTalents = filteredTalents
      .slice()
      .sort(
        (a, b) =>
          a.profileCard.profileExperience - b.profileCard.profileExperience
      );
  } else if (sort === "nameUp") {
    filteredAndSortedTalents = filteredTalents
      .slice()
      .sort((a, b) =>
        a.profileCard.profileFirstName
          .concat(a.profileCard.profileLastName)
          .localeCompare(
            b.profileCard.profileFirstName.concat(b.profileCard.profileLastName)
          )
      );
  } else if (sort === "nameDown") {
    filteredAndSortedTalents = filteredTalents
      .slice()
      .sort((a, b) =>
        a.profileCard.profileFirstName
          .concat(a.profileCard.profileLastName)
          .localeCompare(
            b.profileCard.profileFirstName.concat(b.profileCard.profileLastName)
          )
      )
      .reverse();
  }

  // Pagination
  const indexOfLastTalent = currentPage * talentsPerPage;
  const indexOfFirstTalent = indexOfLastTalent - talentsPerPage;
  const currentTalents = filteredAndSortedTalents.slice(
    indexOfFirstTalent,
    indexOfLastTalent
  );

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

  const talentElements = currentTalents.map((talent) => {
    return (
      <TalentCards
        talent={talent}
        key={talent.id}
        currentUser={props.currentUser}
        isLoggedIn={props.isLoggedIn}
        handleConnections={props.handleConnections}
        handleDisconnections={props.handleDisconnections}
      />
    );
  });
  return (
    <div className="talents--page--container">
      <h2>💡Discover talented professionals:</h2>
      <div className="talents--page--view--card">
        <SortAndFilter handleFilter={handleFilterBox} handleSort={handleSort} />
      </div>
      <div className="talent--cards--wrapper">{talentElements}</div>
      <Pagination
        talentsPerPage={talentsPerPage}
        totalTalents={filteredAndSortedTalents.length}
        paginate={paginate}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        currentPage={currentPage}
      />
    </div>
  );
}
