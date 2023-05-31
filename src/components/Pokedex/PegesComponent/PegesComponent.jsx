import React, { useState } from "react";

const PegesComponent = ({
  onChangePage,
  handleBackPage,
  visiblePages,
  handleNextPage,
  visibleRange,
  pageNumber,
  pages,
}) => {
  return (
    <div>
      <button onClick={handleBackPage} disabled={visibleRange.start === 0}>
        Back
      </button>

      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => {
            onChangePage(page);
          }}
          style={{ color: pageNumber === page ? "red" : undefined }}
        >
          {page}
        </button>
      ))}

      <button
        onClick={handleNextPage}
        disabled={visibleRange.end >= pages.length}
      >
        Next
      </button>
    </div>
  );
};

export default PegesComponent;
