import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({ mode: "onChange" });
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);

  const onSubmit = (data) => console.log(data);

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  const initialData = {
    name: "",
    email: "",
    password: "",
    role_id: "",
    store: {
      name: "",
      phone: "",
      tax_no: "",
      bank_account: "",
    },
  };

  //axios
  useEffect(() => {
    const timeout = setTimeout(() => {
      axios
        .get("https://workintech-fe-ecommerce.onrender.com/roles")
        .then((res) => {
          /*const newData = { ...res.data };*/
          setRoles(res.data);

          /*console.log("newData", newData);*/
          console.log("roles", roles);

          setLoading(false);
        })
        .catch((err) => {
          console.error("hata", err);
          setLoading(false);
        });
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  //SPINNER
  if (loading) {
    return (
      <div className="relative">
        <div className="absolute bg-white bg-opacity-60 z-10 h-full w-full top-24 flex items-center justify-center">
          <div className="flex items-center">
            <span className="text-3xl mr-4 ">Loading</span>
            <svg
              className="animate-spin h-8 w-8 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  //JSX
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
                  {...register("email", {
                    required: "You must enter email",
                    pattern: /^\S+@\S+$/i,
                  })}
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
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
                  {...register("password", {
                    required: "You must enter a password",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                    pattern: {
                      value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
                      message: "Password must meet complexity requirements",
                    },
                  })}
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.password && (
                  <span className="text-red">{errors.password.message}</span>
                )}
              </div>

              <div id="confirm-password-field">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Confirm password
                </label>
                <input
                  type="password"
                  placeholder="Re-enter your password"
                  {...register("confirmPassword", {
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.confirmPassword && (
                  <span className="text-red">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
              <div id="role-field" className="">
                <select
                  className="border border-black rounded-md bg-white text-black p-2"
                  name="role_id"
                  id="role"
                  defaultValue={roles[2].id}
                  {...register("role_id", { required: true })}
                >
                  {roles.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.code}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={!isValid}
                  className={`${
                    isValid
                      ? "bg-blue-500 hover:bg-blue-400 focus:ring-blue-300 "
                      : "bg-red hover:bg-orange-500 focus:ring-orange-300"
                  } flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-lg  focus:outline-none focus:ring  focus:ring-opacity-50"`}
                >
                  <span>Sign Up </span>
                </button>
              </div>
              {!isValid && <p className="text-red">Fill the form correctly</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
