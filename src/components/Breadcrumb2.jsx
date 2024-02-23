import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
export const Breadcrumb2 = () => {
  return (
    <div className="flex font-Montserrat font-bold justify-center items-center bg-gray-100">
      <nav className="text-sm sm:text-base">
        <ol className="flex items-center content-center">
          <li className="flex items-center">
            <a
              href="/home"
              className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
            >
              Home
            </a>
            <span className="mx-2 text-gray">
              <FontAwesomeIcon icon={faAngleRight} />
            </span>
          </li>
          <li className="flex items-center">
            <a
              href="/pricing"
              className="text-gray hover:text-blue-500 transition-colors duration-300"
            >
              Pricing
            </a>
          </li>
        </ol>
      </nav>
    </div>
  );
};
