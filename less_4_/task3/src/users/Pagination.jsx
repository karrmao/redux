import React from 'react';

const Pagination = ({
  goPrev,
  goNext,
  totalItems,
  itemsPerPage,
  currentPage,
}) => {
  const isPrevPageAvailable = currentPage > 1;
  const isNextPageAvailable =
    totalItems / itemsPerPage > currentPage;

  return (
    <div className="pagination">
      <button
        onClick={goPrev}
        className="btn"
        disabled={!isPrevPageAvailable}
      >
        {isPrevPageAvailable && '←'}
      </button>
      <span className="pagination__page">
        {currentPage}
      </span>
      <button
        onClick={goNext}
        className="btn"
        disabled={!isNextPageAvailable}
      >
        {isNextPageAvailable && '→'}
      </button>
    </div>
  );
};

export default Pagination;
