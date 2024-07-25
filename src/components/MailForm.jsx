export const MailForm = () => {
  return (
    <div className="flex flex-row justify-center items-center border border-gray rounded-lg">
      <input
        type="email"
        className="placeholder:text-gray md:placeholder:text-center placeholder:px-4 placeholder:text-sm   bg-transparent  text-sm  text-black"
        placeholder="Your Email"
      />
      <button
        className="bg-blue1 p-3 md:p-2 text-white rounded-r-lg border border-blue1"
        type="button"
      >
        <p className="text-sm">Subscribe</p> 
      </button>
    </div>
  );
};
