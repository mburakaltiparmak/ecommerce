import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategories } from "../store/actions/globalAction";

const TestDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const categoriesData = useSelector((store) => store.global.categories);
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <div
      className="relative flex gap-3 sm:flex-col"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="relative flex text-left">
        <div>
          <button
            className="inline-flex w-full justify-center gap-x-1.5 text-sm text-gray-900"
            id="menu-button"
            aria-expanded={isOpen}
            aria-haspopup="true"
          >
            Shop
            <svg
              className="h-5 w-5 text-gray-900"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div
            className="flex items-center justify-center absolute left-0 z-10 mt-7 w-56 origin-top-right divide-y divide-gray-100 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="flex">
              <div className="WOMEN flex flex-col px-2">
                <Link
                  to="/shop/kadin"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                >
                  WOMEN
                </Link>
                <hr className="border-gray-200"></hr>
                {categoriesData?.map(
                  (item, index) =>
                    item.gender === "k" && (
                      <Link
                        key={index}
                        to={`/shop/kadin/${item.title.toLowerCase()}`}
                        className="text-gray-400 block px-4 py-2 text-sm hover:text-[#00A1C1]"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
                      >
                        {item.title}
                      </Link>
                    )
                )}
              </div>
              <div className="MEN flex flex-col">
                <Link
                  to="/shop/erkek"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                >
                  MEN
                </Link>
                <hr className="border-gray-200"></hr>
                {categoriesData?.map(
                  (item, index) =>
                    item.gender === "e" && (
                      <Link
                        key={index}
                        to={`/shop/erkek/${item.title.toLowerCase()}`}
                        className="text-gray-400 block px-4 py-2 text-sm hover:text-[#00A1C1]"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
                      >
                        {item.title}
                      </Link>
                    )
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default TestDropdown;
