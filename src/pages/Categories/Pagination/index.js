import React from "react";
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import "./pagination.scss";
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxPageButton = 6;


  const changePage = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      onPageChange(newPage);

    }
  };

  const getPaginatedData = () => {
    let startPage = Math.max(1, currentPage - Math.floor(maxPageButton / 2));
    let endPage = startPage + maxPageButton - 1;
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxPageButton + 1);
    }
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  return (
    <div className="pagination">

      {currentPage > 1 && (
        <button onClick={() => changePage(currentPage - 1)}> <GrFormPreviousLink /></button>
      )}
      {getPaginatedData().map((page) => (
        <button
          key={page}
          onClick={() => changePage(page)}
          className={currentPage === page ? "active" : ""}
        >
          {page}
        </button>
      ))}
      
      <button
        onClick={() => changePage(currentPage + 1)}
      >
        <GrFormNextLink />
      </button>
    </div>
  );
};

export default Pagination;
