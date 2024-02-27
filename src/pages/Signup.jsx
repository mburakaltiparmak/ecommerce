import { useForm } from "react-hook-form";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => console.log(data);

  return (
    <section className="bg-white dark:bg-gray-900 sm:px-10 font-Montserrat font-bold">
      <div className="flex justify-center">
        <div className="flex items-center w-full max-w-3xl p-8 mx-auto sm:px-0   ">
          <div className="w-full flex flex-col gap-6 text-sm">
            <p className="text-gray-500 dark:text-gray-400">
              Let’s get you all set up so you can verify your personal account
              and begin setting up your profile.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="gap-6 flex flex-col"
            >
              <div id="name-field" className="">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John"
                  {...register("name", {
                    required: "You must enter name",
                    minLength: {
                      value: 3,
                      message: "Min 3 characters",
                    },
                  })}
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.name && (
                  <p className="text-red" id="name-error">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div id="email-field">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="johnsnow@example.com"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register("email", {
                    required: "You must enter email",
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                {errors.email && errors.email.type === "required" && (
                  <span className="text-red">This field is required</span>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <span className="text-red">Invalid email address</span>
                )}
              </div>

              <div id="password-field">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register("password", {
                    required: true,
                    minLength: 8,
                    pattern: /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[\W_]).{8,}$/,
                  })}
                />
                {errors.password && errors.password.type === "required" && (
                  <span className="text-red">This field is required</span>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <span className="text-red">
                    Password must be at least 8 characters long
                  </span>
                )}
                {errors.password && errors.password.type === "pattern" && (
                  <span className="text-red">
                    Password must include at least one number, one lowercase
                    letter, one uppercase letter, and one special character
                  </span>
                )}
              </div>

              <div id="confirm-password-field">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Confirm password
                </label>
                <input
                  type="password"
                  placeholder="Re-enter your password"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"

                  /* {...register("confirmPassword", {
                    validate: (value) => value === data.password,
                  })}*/
                />
                {errors.confirmPassword && (
                  <span className="text-red">Passwords do not match</span>
                )}
              </div>

              <button className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                <span>Sign Up </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Signup;
