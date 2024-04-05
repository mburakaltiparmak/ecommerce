import React from "react";

export const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <nav className="flex items-center font-Montserrat font-bold -space-x-px">
      <button
        onClick={() => handlePageChange(1)}
        type="button"
        className="min-h-14 min-w-14 font-bold focus:text-white hover:text-white hover:bg-blue1 focus:bg-darkblue1 border border-gray text-blue1 py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg  focus:outline-none   disabled:opacity-50 disabled:pointer-events-none"
      >
        <span className="">First</span>
      </button>
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          type="button"
          className={`min-h-14 min-w-14 font-bold focus:text-white hover:text-white hover:bg-blue1 focus:bg-darkblue1 border border-gray text-blue1 py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg  focus:outline-none   disabled:opacity-50 disabled:pointer-events-none ${
            index + 1 === currentPage ? "bg-blue1 text-white" : ""
          }`}
          aria-current={index + 1 === currentPage ? "page" : undefined}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        type="button"
        className="min-h-14 min-w-14 font-bold focus:text-white hover:text-white hover:bg-blue1 focus:bg-darkblue1 border border-gray text-blue1 py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg  focus:outline-none   disabled:opacity-50 disabled:pointer-events-none"
      >
        <span className="">Next</span>
      </button>
    </nav>
  );
};
