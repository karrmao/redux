import React from 'react';

const Pagination = ({ goNext, goPrev }) => {
  return (
    <div className="pagination">
      <button className="btn"></button>
      <span className="pagination__page">
        {currentPage}
      </span>
    </div>
  );
};
export default Pagination;
