import { faAddressBook, faClockRotateLeft, faHome, faRightFromBracket, faShop, faUser, faUserPlus, faUsersBetweenLines, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { useGravatar } from "use-gravatar";
import {
    userEmailSetter,
    userIdSetter,
    userNameSetter,
  } from "../../store/actions/userAction";
  import { isLogin } from "../../store/actions/loginAction";
  import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MobileSidebar = ({ setOpenSidebar }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const userData = useSelector((store) => store.userRed);
    const categoriesData = useSelector((store) => store.global.categories);
    const gravatar = useGravatar(userData.email);
    const isLogin = useSelector((store)=>store.login.isLogged);

    const categoryHandleClick = (categoryId) => {
        dispatch({ type: "SET_SELECTED_CATEGORY", payload: categoryId });
        setOpenSidebar(false);
    };

    const collapseHandler = () => {
        setOpenSidebar(false);
    };

    const handleButtonClick = (path) => {
        history.push(path);
        setOpenSidebar(false);
    };
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
        <div className="container flex flex-col bg-white">
            <aside className="group/sidebar flex flex-col shrink-0 w-[250px] transition-all duration-300 ease-in-out m-0 fixed z-40 inset-y-0 right-0 bg-white border-l border-l-dashed border-l-neutral-200 sidenav fixed-end loopple-fixed-end" id="sidenav-main">
                <div className="text-darkblue1 flex flex-row items-center justify-around py-4">
                    <button className="hover:cursor-pointer text-xl" onClick={() => handleButtonClick("/home")}>
                        BrandName
                    </button>
                    <button onClick={() => collapseHandler()}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <div className="hidden border-b border-dotted lg:block border-darkblue1"></div>
                {isLogin ? (
                    <span>
                    <div className="flex flex-col items-center justify-center gap-4 py-4">
                    <img className="w-8 h-8 object-cover" src={gravatar} alt="avatar image" />
                    <p className="text-darkblue1 text-base">{userData.name}</p>
                    <button
                    onClick={logoutHandler}
                    className="flex flex-row items-center gap-2 text-darkblue1">
                        <p className="text-base font-semibold">Logout</p>
                        <FontAwesomeIcon icon={faRightFromBracket} />
                    </button>
                    <button onClick={() => handleButtonClick("/orders")} className="flex flex-row items-center gap-2 text-darkblue1">
                        <p className="text-base font-semibold">Previous Orders</p>
                        <FontAwesomeIcon icon={faClockRotateLeft} />
                    </button>
                </div>
                <div className="hidden border-b border-dotted lg:block border-darkblue1"></div>
                </span>
                ) : (
                    <div className="flex flex-col items-center justify-center gap-4 mt-2">
                    <button
                    onClick={()=>handleButtonClick("/login")}
                    className="flex flex-row items-center gap-2 text-darkblue1">
                        <p className="text-base font-semibold">Login</p>
                        <FontAwesomeIcon icon={faUser} />
                    </button>
                    <button
                    onClick={()=>handleButtonClick("/signup")}
                    className="flex flex-row items-center gap-2 text-darkblue1">
                        <p className="text-base font-semibold">Signup</p>
                        <FontAwesomeIcon icon={faUserPlus} />
                    </button>
                    
                    </div>
            )}
                

                <div className="relative overflow-y-scroll py-4">
                    <div className="flex flex-col items-center gap-4 w-full font-medium text-gray">
                        <button onClick={() => handleButtonClick("/home")} className="flex flex-row items-center gap-2">
                            <p>Home</p>
                            <FontAwesomeIcon icon={faHome} />
                        </button>
                        <button onClick={() => handleButtonClick("/shop")} className="flex flex-row items-center gap-2">
                            <p>Shop</p>
                            <FontAwesomeIcon icon={faShop} />
                        </button>
                        <div className="border-b w-full border-dotted border-darkblue1"></div>
                        <span>
                            <div className="flex flex-row gap-4">
                                <div className="flex flex-col items-center">
                                    <Link to="/shop/kadin?category" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">
                                        <p>WOMEN</p>
                                    </Link>
                                    <div className="border-b w-full border-dotted lg:block border-darkblue1"></div>
                                    {categoriesData?.map((item, index) =>
                                        item.gender === "k" && (
                                            <Link
                                                onClick={() => categoryHandleClick(item.id)}
                                                key={index}
                                                to={`/shop/kadin?category=${item.id}`}
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
                                <div className="flex flex-col items-center">
                                    <Link to="/shop/erkek?category" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">
                                        <p>MEN</p>
                                    </Link>
                                    <div className="border-b w-full border-dotted lg:block border-darkblue1"></div>
                                    {categoriesData?.map((item, index) =>
                                        item.gender === "e" && (
                                            <Link
                                                onClick={() => categoryHandleClick(item.id)}
                                                key={index}
                                                to={`/shop/erkek?category=${item.id}`}
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
                        </span>
                        <div className="border-b w-full border-dotted border-darkblue1"></div>
                        <span className="flex flex-col items-center gap-4">
                            <button onClick={() => handleButtonClick("/about")} className="flex flex-row items-center gap-2">
                                <p>About</p>
                                <FontAwesomeIcon icon={faUsersBetweenLines} />
                            </button>
                            <button onClick={() => handleButtonClick("/contact")} className="flex flex-row items-center gap-2">
                                <p>Contact</p>
                                <FontAwesomeIcon icon={faAddressBook} />
                            </button>
                        </span>
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default MobileSidebar;
