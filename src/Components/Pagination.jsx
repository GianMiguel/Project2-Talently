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
              <button className="pagination--prev" onClick={handlePreviousPage}>
                <img
                  src={require(`../images/pagination-prev.png`)}
                  alt="arrow left"
                />
                Prev
              </button>
            )}
          </div>
          <div className="pagination--pages--wrapper">
            {pageNumbersElements}
          </div>
          <div className="pagination--next--wrapper">
            {currentPage < pageNumbers.length && (
              <button className="pagination--next" onClick={handleNextPage}>
                Next
                <img
                  src={require(`../images/pagination-next.png`)}
                  alt="arrow right"
                />
              </button>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
