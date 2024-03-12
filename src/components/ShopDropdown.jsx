import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../store/actions/globalAction";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ShopDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const categoriesData = useSelector((store) => store.global.categories);
  console.log("categories data", categoriesData);
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <Menu
      as="div"
      className="relative inline-block text-left font-Montserrat"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div>
        <Menu.Button className="inline-flex w-full font-Montserrat justify-center gap-x-1.5  bg-white text-sm sm:text-2xl font-bold sm:text-gray px-2">
          Shop
          <ChevronDownIcon
            className="-mr-6 h-5 w-5 sm:text-gray  "
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {categoriesData.map((item, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <Link
                    to={`/shop/${
                      item.gender === "e" ? "erkek" : "kadin"
                    }/${item.title.toLowerCase("")}`}
                  >
                    <button
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm sm:text-lg"
                      )}
                    >
                      {item.gender === "e" ? "Erkek" : "Kadın"} {item.title}
                    </button>
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
