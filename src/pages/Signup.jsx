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
  const onSubmit = (data) => console.log(data);

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  const oldData = [""];
  const dummyData = [
    {
      id: 1,
      name: "Yönetici",
      code: "admin",
    },
    {
      id: 2,
      name: "Mağaza",
      code: "store",
    },
    {
      id: 3,
      name: "Müşteri",
      code: "customer",
    },
  ];
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      axios
        .get("https://workintech-fe-ecommerce.onrender.com/roles")
        .then((res) => {
          const newData = { ...res.data };
          setRoles(res.data);
          const roleData = { roles };
          console.log("newData", newData);
          console.log("roles", roles);
          console.log("roleData", roleData);
          setLoading(false);
        })
        .catch((err) => {
          console.error("hata", err);
          setLoading(false);
        });
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);
  const [defaultValue, setDefaultValue] = useState("");
  useEffect(() => {
    if (roles.length > 0) {
      setDefaultValue(roles[2].code);
    }
  }, [roles]);
  if (loading) {
    return <div>Loading...</div>;
  }
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
                  defaultValue={defaultValue}
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
