import React from "react";
import TalentCards from "../Components/TalentCards";
import Pagination from "../Components/Pagination";
import SortAndFilter from "../Components/SortAndFilter";
import * as Helpers from "../Helpers/helpers";
import { GrClose } from "react-icons/gr";

export default function Talents(props) {
  const [filters, setFilters] = React.useState([]);
  const [sort, setSort] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [talentsPerPage] = React.useState(8);
  const [searchQuery, setSearchQuery] = React.useState("");

  const talents = props.accounts.filter(
    (account) => account.userType === "talent"
  );

  React.useEffect(() => {
    if (!sort && !filters.length && !searchQuery) {
      document
        .querySelector(".talents--view--feedback")
        .classList.add("view--feedback--empty");
    } else {
      document
        .querySelector(".talents--view--feedback")
        .classList.remove("view--feedback--empty");
    }
  }, [sort, filters, searchQuery]);

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

  console.log(props.currentUser);

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

  function toggleFilterAndSort() {
    document
      .querySelector(".talents--page--view--card")
      .classList.toggle("view--card--hidden");
    if (
      !document
        .querySelector(".talents--page--view--card")
        .classList.contains("view--card--hidden")
    ) {
      document.querySelectorAll(".sort--filter--button")[0].textContent =
        "Close Sort/Filter";
    } else {
      document.querySelectorAll(".sort--filter--button")[0].textContent =
        "Sort/Filter";
    }
  }

  function removeSort() {
    setSort("");
    document.querySelector("#sort").value = "";
  }

  function removeFilter(e) {
    setFilters((prevFilters) => {
      return prevFilters.filter(
        (filter) =>
          filter !== e.target.closest(".filter--option").dataset.filter
      );
    });
    document.querySelector(
      `#${e.target.closest(".filter--option").dataset.filter}`
    ).checked = false;
  }
  const filtersRemoveElement = filters.map((filter, i) => (
    <span data-filter={filter} className="filter--option" key={i}>
      <div className="talents--displayed--contents">
        {filter}
        <GrClose className="talents--remove--view" onClick={removeFilter} />
      </div>
    </span>
  ));
  return (
    <div className="talents--page">
      <div className="talents--page--container">
        <div className="talents--page--header">
          {props.currentUser.userType === "hunter" ? (
            <h2>{`Hi ${props.currentUser.firstName}, explore this page for amazing talents!`}</h2>
          ) : (
            <h2>Discover talented professionals</h2>
          )}
          <div>
            <button
              className="sort--filter--button"
              onClick={toggleFilterAndSort}
            >
              Sort / Filter
            </button>
            <div className="talents--page--view--card view--card--hidden">
              <SortAndFilter
                handleFilter={handleFilterBox}
                handleSort={handleSort}
                handleShowBtn={toggleFilterAndSort}
              />
            </div>
          </div>
        </div>
        <div className="talents--view--feedback">
          {sort && (
            <span className="talents--displayed">
              Sorted by:
              <div className="talents--displayed--contents">
                {Helpers.sortString(sort)}
                <GrClose
                  className="talents--remove--view"
                  onClick={removeSort}
                />
              </div>
            </span>
          )}
          {filters.length >= 1 && (
            <span className="talents--displayed">
              Filtered by: {filtersRemoveElement}
            </span>
          )}
          {searchQuery && (
            <span className="talents--displayed">Search by: </span>
          )}
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
    </div>
  );
}
