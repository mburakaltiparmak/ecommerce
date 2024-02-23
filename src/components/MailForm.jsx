export const MailForm = () => {
  return (
    <div className="relative flex flex-wrap">
      <input
        type="email"
        className="relative m-0 -mr-0.5 block w-[1px] px-20 min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding py-2 text-base sm:text-lg font-xl leading-[1.6] text-black outline-none transition duration-200 ease-in-out "
        placeholder="Your Email"
      />
      <button
        className="z-[2] inline-block rounded-r bg-blue1 px-6 pb-2 pt-2.5 text-sm sm:text-lg font-medium  leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:z-[3] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        data-te-ripple-init
        type="button"
        id="button-addon2"
      >
        Subscribe
      </button>
    </div>
  );
};
