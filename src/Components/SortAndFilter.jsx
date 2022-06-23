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
        <h3>Filter by field</h3>
        <div className="filter--section--wrapper">
          <div className="filter--group">
            {/* Show All */}
            <div className="filter--input--group">
              <input
                type="checkbox"
                onChange={handleFilterBox}
                id="all"
                name="all"
              />
              <label htmlFor="all">Show All</label>
            </div>
            {/* front-end-developement */}
            <div className="filter--input--group">
              <input
                type="checkbox"
                onChange={handleFilterBox}
                id="front-end-development"
                name="front-end-development"
              />
              <label htmlFor="front-end-development">
                Front End Development
              </label>
            </div>
            {/* back-end-developement */}
            <div className="filter--input--group">
              <input
                type="checkbox"
                onChange={handleFilterBox}
                id="back-end-developement"
                name="back-end-development"
              />
              <label htmlFor="back-end-developement">
                Back End Development
              </label>
            </div>
            {/* full-stack-developement */}
            <div className="filter--input--group">
              <input
                type="checkbox"
                onChange={handleFilterBox}
                id="full-stack-developement"
                name="full-stack-development"
              />
              <label htmlFor="full-stack-developement">
                Full Stack Development
              </label>
            </div>
          </div>
          <div className="filter--group">
            {/* android-development */}
            <div className="filter--input--group">
              <input
                type="checkbox"
                onChange={handleFilterBox}
                id="android-development"
                name="android-development"
              />
              <label htmlFor="android-development">Android Development</label>
            </div>
            {/* ios-development */}
            <div className="filter--input--group">
              <input
                type="checkbox"
                onChange={handleFilterBox}
                id="ios-development"
                name="ios-development"
              />
              <label htmlFor="ios-development">iOS Development</label>
            </div>
            {/* web-design */}
            <div className="filter--input--group">
              <input
                type="checkbox"
                onChange={handleFilterBox}
                id="web-design"
                name="web-design"
              />
              <label htmlFor="web-design">Web Design</label>
            </div>
            {/* software-engineering */}
            <div className="filter--input--group">
              <input
                type="checkbox"
                onChange={handleFilterBox}
                id="software-engineering"
                name="software-engineering"
              />
              <label htmlFor="software-engineering">Software Engineering</label>
            </div>
          </div>
          <div className="filter--group">
            {/* photography */}
            <div className="filter--input--group">
              <input
                type="checkbox"
                onChange={handleFilterBox}
                id="photography"
                name="photography"
              />
              <label htmlFor="photography">Photography</label>
            </div>
            {/* videography */}
            <div className="filter--input--group">
              <input
                type="checkbox"
                onChange={handleFilterBox}
                id="videography"
                name="videography"
              />
              <label htmlFor="videography">Videography</label>
            </div>
            {/* graphic-design */}
            <div className="filter--input--group">
              <input
                type="checkbox"
                onChange={handleFilterBox}
                id="graphic-design"
                name="graphic-design"
              />
              <label htmlFor="graphic-design">Graphic Design</label>
            </div>
            {/* digital-animation */}
            <div className="filter--input--group">
              <input
                type="checkbox"
                onChange={handleFilterBox}
                id="digital-animation"
                name="digital-animation"
              />
              <label htmlFor="digital-animation">Digital Animation</label>
            </div>
          </div>
        </div>
      </div>
      <div className="talents--page--view--card--sort--section">
        <div>
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
        <div>
          <button
            className="sort--filter--button sort--apply--button"
            onClick={props.handleShowBtn}
          >
            Apply
          </button>
        </div>
      </div>
    </>
  );
}
