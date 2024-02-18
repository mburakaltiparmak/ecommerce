export const Pagination = () => {
  return (
    <nav className="flex items-center font-montserrat font-bold -space-x-px">
      <button
        type="button"
        className="min-h-14 min-w-14 font-bold focus:text-white hover:text-white hover:bg-blue1 focus:bg-darkblue1 border border-gray text-blue1 py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg  focus:outline-none   disabled:opacity-50 disabled:pointer-events-none"
      >
        <span className="">First</span>
      </button>
      <button
        type="button"
        className="min-h-14 min-w-14 font-bold focus:text-white hover:text-white hover:bg-blue1 focus:bg-darkblue1 border border-gray text-blue1 py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg  focus:outline-none   disabled:opacity-50 disabled:pointer-events-none"
        aria-current="page"
      >
        1
      </button>
      <button
        type="button"
        className="min-h-14 min-w-14 font-bold focus:text-white hover:text-white hover:bg-blue1 focus:bg-darkblue1 border border-gray text-blue1 py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg  focus:outline-none   disabled:opacity-50 disabled:pointer-events-none"
      >
        2
      </button>
      <button
        type="button"
        className="min-h-14 min-w-14 font-bold focus:text-white hover:text-white hover:bg-blue1 focus:bg-darkblue1 border border-gray text-blue1 py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg  focus:outline-none   disabled:opacity-50 disabled:pointer-events-none"
      >
        3
      </button>
      <button
        type="button"
        className="min-h-14 min-w-14 font-bold focus:text-white hover:text-white hover:bg-blue1 focus:bg-darkblue1 border border-gray text-blue1 py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg  focus:outline-none   disabled:opacity-50 disabled:pointer-events-none"
      >
        <span className="">Next</span>
      </button>
    </nav>
  );
};
