import { Link } from "react-router-dom";
import "./style.css";
import configs from "../../../../configs";
import { AuthContext } from "../../../../pages/login/authContext";
import { useContext } from "react";
import { Role } from "../../../../shared/constant";
const NavBar = () => {
    const { user, signOut } = useContext(AuthContext);
    return (
        <nav className="bg-red-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <i className="fas fa-home text-white text-2xl"></i>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link
                                        className="text-white hover:bg-red-700 px-3 py-2 rounded-md text-sm fw-bold"
                                        to={
                                            configs.routes.ieltsTestList +
                                            "?type=Reading"
                                        }
                                    >
                                        IELTS Reading Test
                                    </Link>
                                    <Link
                                        className="text-white hover:bg-red-700 px-3 py-2 rounded-md text-sm fw-bold"
                                        to={
                                            configs.routes.ieltsTestList +
                                            "?type=Listening"
                                        }
                                    >
                                        IELTS Listening Test
                                    </Link>
                                    <Link
                                        className="text-white hover:bg-red-700 px-3 py-2 rounded-md text-sm fw-bold"
                                        to={
                                            (user?.roles.includes(
                                                Role.Examiner
                                            ) &&
                                                configs.routes.testResultList +
                                                    "?type=Writing") ||
                                            configs.routes.ieltsTestList +
                                                "?type=Writing"
                                        }
                                    >
                                        IELTS Writing Test
                                    </Link>
                                    <Link
                                        className="text-white hover:bg-red-700 px-3 py-2 rounded-md text-sm fw-bold"
                                        to={
                                            configs.routes.ieltsTestList +
                                            "?type=Speaking"
                                        }
                                    >
                                        IELTS Speaking Test
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-end flex-2">
                        <a
                            href="#"
                            className="bg-red-600 text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            InterGreat Study Abroad
                        </a>
                        <div className="ml-4 flex items-center md:ml-6">
                            <button className="bg-red-800 p-1 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white">
                                <span className="sr-only">
                                    View notifications
                                </span>
                                <i className="fas fa-bell"></i>
                            </button>
                            <div className="ml-3 relative">
                                <div className="flex items-center space-x-3">
                                    <img
                                        id="avatarButton"
                                        type="button"
                                        data-dropdown-toggle="userDropdown"
                                        data-dropdown-placement="bottom-start"
                                        className="w-10 h-10 rounded-full cursor-pointer bg-white"
                                        src="/docs/images/people/profile-picture-5.jpg"
                                        alt="User dropdown"
                                    ></img>

                                    <div
                                        id="userDropdown"
                                        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                                    >
                                        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                            <div>Bonnie Green</div>
                                            <div className="font-medium truncate">
                                                name@flowbite.com
                                            </div>
                                        </div>
                                        <ul
                                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                            aria-labelledby="avatarButton"
                                        >
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Dashboard
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Settings
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Earnings
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="py-1">
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                            >
                                                Sign out
                                            </a>
                                        </div>
                                    </div>
                                    <a
                                        href="#"
                                        className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Lê Chiến
                                    </a>
                                </div>
                            </div>
                            {(user && (
                                <button
                                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={signOut}
                                >
                                    Logout
                                </button>
                            )) || (
                                <Link
                                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                    to={configs.routes.login}
                                >
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default NavBar;
