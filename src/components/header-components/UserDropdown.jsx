import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  userEmailSetter,
  userIdSetter,
  userNameSetter,
} from "../../store/actions/userAction";
import { isLogin } from "../../store/actions/loginAction";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function UserDdown() {
  const userData = useSelector((store) => store.userRed);
  const dispatch = useDispatch();
  const history = useHistory();
  const nameAtStorage = localStorage.getItem("userName");
  const logoutHandler = () => {
    dispatch(userEmailSetter(""));
    dispatch(userNameSetter(""));
    dispatch(userIdSetter(""));
    localStorage.removeItem("userName");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    dispatch(isLogin(false));
    toast.info("You have been successfully logged out!");
    history.push("/home");
  };

  return (
    <Menu as="div" className="relative inline-block text-left font-Montserrat">
      <div>
        <Menu.Button className="inline-flex w-full font-Montserrat justify-center gap-x-1.5  bg-white text-sm sm:text-2xl font-bold sm:text-gray px-2">
          {userData.name || nameAtStorage}
          <ChevronDownIcon
            className="-mr-6 h-5 w-5 sm:text-gray  "
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={logoutHandler}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm sm:text-lg"
                  )}
                >
                  Logout
                </button>
              )}
            </Menu.Item>
            <Menu.Item className="hidden">
              {({ active }) => (
                <a
                  href="/product"
                  className={classNames(
                    active ? " bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm sm:text-lg sm:hidden"
                  )}
                >
                  Product
                </a>
              )}
            </Menu.Item>
            <Menu.Item className="hidden">
              {({ active }) => (
                <a
                  href="/team"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm sm:text-lg"
                  )}
                >
                  Team
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item className="hidden">
                {({ active }) => (
                  <a
                    href="/pricing"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full px-4 py-2 text-left text-sm sm:text-lg sm:hidden"
                    )}
                  >
                    Pricing
                  </a>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
