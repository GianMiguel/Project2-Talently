import React from "react";
import TalentCards from "../Components/TalentCards";

export default function Talents(props) {
  const [filters, setFilters] = React.useState([]);
  const [sort, setSort] = React.useState("");

  const talents = props.accounts.filter(
    (account) => account.userType === "talent"
  );

  function handleFilterBox(e) {
    if (e.target.name === "all") {
      if (e.target.checked) {
        e.target
          .closest(".talents--page--view--card")
          .querySelectorAll("input")
          .forEach((input, i) => {
            if (input.name !== "all") {
              input.checked = false;
            }
          });
      }
      setFilters([]);
    } else if (e.target.name !== "all") {
      e.target
        .closest(".talents--page--view--card")
        .querySelector(`input[name="all"]`).checked = false;
      if (e.target.checked)
        setFilters((prevFilters) => [...prevFilters, e.target.name]);
      if (!e.target.checked)
        setFilters((prevFilters) =>
          prevFilters.filter((filter) => filter !== e.target.name)
        );
    }
  }

  function handleSort(e) {
    setSort(e.target.value);
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

  const talentElements = filteredAndSortedTalents.map((talent) => {
    return <TalentCards talent={talent} key={talent.id} />;
  });
  return (
    <div className="talents--page--container">
      <h2>💡Discover talented professionals:</h2>
      <div className="talents--page--view--card">
        <div className="talents--page--view--card--filter--section">
          <h3>Filter by skills:</h3>
          {/* Show All */}
          <input
            type="checkbox"
            onChange={handleFilterBox}
            id="all"
            name="all"
          />
          <label htmlFor="all">Show All</label>
          {/* HTML */}
          <input
            type="checkbox"
            onChange={handleFilterBox}
            id="html"
            name="html"
          />
          <label htmlFor="html">HTML</label>
          {/* CSS */}
          <input
            type="checkbox"
            onChange={handleFilterBox}
            id="css"
            name="css"
          />
          <label htmlFor="css">CSS</label>
          {/* React */}
          <input
            type="checkbox"
            onChange={handleFilterBox}
            id="react"
            name="react"
          />
          <label htmlFor="react">React</label>
          {/* JS */}
          <input
            type="checkbox"
            onChange={handleFilterBox}
            id="javascript"
            name="javascript"
          />
          <label htmlFor="javascript">JavaScript</label>
          {/* Videography */}
          <input
            type="checkbox"
            onChange={handleFilterBox}
            id="videography"
            name="videography"
          />
          <label htmlFor="videography">Videography</label>
          {/* C */}
          <input type="checkbox" onChange={handleFilterBox} id="c" name="c" />
          <label htmlFor="c">C</label>
          {/* Web Design */}
          <input
            type="checkbox"
            onChange={handleFilterBox}
            id="web--design"
            name="web--design"
          />
          <label htmlFor="web--design">Web Design</label>
          {/* Graphic Design */}
          <input
            type="checkbox"
            onChange={handleFilterBox}
            id="graphic--design"
            name="graphic--design"
          />
          <label htmlFor="graphic--design">Graphic Design</label>
        </div>
        <div className="talents--page--view--card--filter--section">
          <h3>Sort</h3>
          <select name="sort" id="sort" onChange={handleSort}>
            <option value="">Do not sort</option>
            <option value="experienceDown">
              Years of experience (Highest to Lowest)
            </option>
            <option value="experienceUp">
              Years of experience (Lowest to Highest)
            </option>
            <option value="nameUp">Name (A to Z)</option>
            <option value="nameDown">Name (Z to A)</option>
          </select>
        </div>
      </div>
      <div className="talent--cards--wrapper">{talentElements}</div>
    </div>
  );
}
