import React from "react";

export default function SortAndFilter(props) {
  function handleFilterBox(e) {
    props.handleFilter(e.target);
  }

  function handleSort(e) {
    props.handleSort(e.target);
  }
  return (
    <>
      <div className="talents--page--view--card--filter--section">
        <h3>Filter by skills:</h3>
        {/* Show All */}
        <input type="checkbox" onChange={handleFilterBox} id="all" name="all" />
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
        <input type="checkbox" onChange={handleFilterBox} id="css" name="css" />
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
    </>
  );
}
