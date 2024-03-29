export const Pagination = ({
  postsPerPage,
  length,
  currentPage,
  handlePagination,
}) => {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
    paginationNumbers.push(i);
  }
  return (
    <nav className="flex items-center font-Montserrat font-bold -space-x-px">
      <button
        type="button"
        className="min-h-14 min-w-14 font-bold focus:text-white hover:text-white hover:bg-blue1 focus:bg-darkblue1 border border-gray text-blue1 py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg  focus:outline-none   disabled:opacity-50 disabled:pointer-events-none"
      >
        <span className="">First</span>
      </button>
      {paginationNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={handlePagination}
          className={
            currentPage === pageNumber
              ? "active pagination-btn "
              : "pagination-btn"
          }
        >
          {pageNumber}
        </button>
      ))}
      <button
        type="button"
        className="min-h-14 min-w-14 font-bold focus:text-white hover:text-white hover:bg-blue1 focus:bg-darkblue1 border border-gray text-blue1 py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg  focus:outline-none   disabled:opacity-50 disabled:pointer-events-none"
      >
        <span className="">Next</span>
      </button>
    </nav>
  );
};
