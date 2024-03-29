export const Pagination = ({ data, setPage, isPreviousData, page }) => {
  return (
    <nav className="flex items-center font-Montserrat font-bold -space-x-px">
      <button
        type="button"
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={page === 0}
        className="min-h-14 min-w-14 font-bold focus:text-white hover:text-white hover:bg-blue1 focus:bg-darkblue1 border border-gray text-blue1 py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg  focus:outline-none   disabled:opacity-50 disabled:pointer-events-none"
      >
        <span className="">Previous</span>
      </button>

      <button className="pagination-btn">{page + 1}</button>

      <button
        type="button"
        onClick={() => {
          setPage((old) => (data?.hasMore ? old + 1 : old));
        }}
        disabled={isPreviousData || !data?.hasMore}
        className="min-h-14 min-w-14 font-bold focus:text-white hover:text-white hover:bg-blue1 focus:bg-darkblue1 border border-gray text-blue1 py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg  focus:outline-none   disabled:opacity-50 disabled:pointer-events-none"
      >
        <span className="">Next</span>
      </button>
    </nav>
  );
};
