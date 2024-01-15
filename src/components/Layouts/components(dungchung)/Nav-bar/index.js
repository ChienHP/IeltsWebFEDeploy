import { Link } from "react-router-dom";
import "./style.css";
import configs from "../../../../configs";
import { AuthContext } from "../../../../pages/login/authContext";
import { useContext, useEffect, useState } from "react";
import { Role } from "../../../../shared/constant";
import { getUserById } from "../../../../apis/user.api";
const NavBar = () => {
    const { user, signOut } = useContext(AuthContext);

    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await getUserById();
            setUserInfo(res.data);
        })();
    }, [user]);

    return (
        <nav className="bg-red-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-start">
                        <div className="flex-shrink-0 flex items-center ml-2">
                            <Link to={configs.routes.home}>
                                <i className="fas fa-home text-white text-2xl"></i>
                            </Link>
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
                            Forum Discussion
                        </a>
                        <div className="ml-4 flex items-center md:ml-6">
                            <button className="bg-red-800 p-1 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white">
                                <span className="sr-only">
                                    View notifications
                                </span>
                                <i className="fas fa-bell"></i>
                            </button>

                            {user && (
                                <div className="ml-3 relative">
                                    <div className="flex items-center space-x-3 text-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-person-circle w-10 h-10 rounded-full cursor-pointer color-white"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                            <path
                                                fill-rule="evenodd"
                                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                                            />
                                        </svg>
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
                                            <span className="fw-bold fs-5">
                                                {userInfo?.fullName}
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            )}

                            {(user && (
                                <button
                                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={signOut}
                                >
                                    Logout
                                </button>
                            )) || (
                                <Link
                                    className="my-button-74"
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
