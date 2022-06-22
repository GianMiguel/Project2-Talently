import React from "react";

export default function Pagination({
  talentsPerPage,
  totalTalents,
  paginate,
  handlePreviousPage,
  handleNextPage,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTalents / talentsPerPage); i++) {
    pageNumbers.push(i);
  }

  const pageNumbersElements = pageNumbers.map((num) => {
    return (
      <a
        className={`pagination--pages ${
          num === currentPage ? "pagination--pages--active" : ""
        }`}
        href="!#"
        key={num}
        onClick={(e) => {
          e.preventDefault();
          paginate(num);
        }}
      >
        {num}
      </a>
    );
  });

  return (
    <>
      {pageNumbers.length > 1 ? (
        <div className="pagination--container">
          <div className="pagination--previous--wrapper">
            {currentPage >= 2 && (
              <p onClick={handlePreviousPage}>Previous Page</p>
            )}
          </div>
          <div className="pagination--pages--wrapper">
            {pageNumbersElements}
          </div>
          <div className="pagination--next--wrapper">
            {currentPage < pageNumbers.length && (
              <p onClick={handleNextPage}>Next Page</p>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
