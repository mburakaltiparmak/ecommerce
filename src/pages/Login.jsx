import { useHistory, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: localStorage.getItem("email") || "",
      password: "",
      rememberMe: false,
    },
  });
  const [loading, setLoading] = useState(false);
  const baseURL = "https://workintech-fe-ecommerce.onrender.com";
  const instance = axios.create({ baseURL });
  const history = useHistory();
  const location = useLocation();
  const onSubmit = (formData) => {
    const formDataToSend = formData;
    console.log("giden data", formDataToSend);
    setLoading(true);
    instance
      .post("/login", formDataToSend)
      .then((res) => {
        console.log("Login oldu: ", res.data);
        if (formData.rememberMe) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("email", res.data.email);
          setLoading(false);
        }
        /*setEmail(res.data.email);*/
        history.push("/home");
        setLoading(false);
        toast.success(`You have been successfully logged in!`);
      })
      .catch((err) => {
        console.log("hata", err);
        setLoading(false);
        toast.error("Login process has been failed!");
      });
  };
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
  return (
    <div className="bg-white dark:bg-gray-900 py-10">
      <div className="flex justify-center ">
        <div className="flex items-center w-full max-w-md px-6 mx-auto sm:w-4/6">
          <div className="flex-1">
            <div className="text-center">
              <div className="flex justify-center mx-auto">
                <h3 className="h3-styles font-bold font-Montserrat">
                  Brand Logo
                </h3>
              </div>

              <p className="mt-3 text-gray-500 dark:text-gray-300">
                Sign in to access your account
              </p>
            </div>

            <div className="mt-8">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@example.com"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="text-red">{errors.email.message}</span>
                  )}
                </div>

                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="text-sm text-gray-600 dark:text-gray-200"
                    >
                      Password
                    </label>
                    <a
                      href="#"
                      className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    {...register("password")}
                  />
                </div>
                <div className="mt-6 flex flex-row gap-1">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                    data-testid="remember-input"
                    {...register("rememberMe")}
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember me!
                  </label>
                </div>

                <div className="mt-6">
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Sign in
                  </button>
                </div>
              </form>

              <p className="mt-6 text-sm text-center text-gray-400">
                Don't have an account yet?{" "}
                <button
                  onClick={() => history.push("/signup")}
                  className="text-blue-500 focus:outline-none focus:underline hover:underline"
                >
                  Sign up
                </button>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
