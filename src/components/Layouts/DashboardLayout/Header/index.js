import { useContext, useEffect, useState } from "react";
import "./style.css";
import { AuthContext } from "../../../../pages/login/authContext";
import { getUserById } from "../../../../apis/user.api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import configs from "../../../../configs";

const Header = () => {
    const { user, signOut } = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState(null);
    useEffect(() => {
        (async () => {
            try {
                const res = await getUserById();
                setUserInfo(res.data);
            } catch (error) {
                toast.error(error);
            }
        })();
    }, [user]);
    return (
        <nav className="fixed top-0 z-50 w-full border-b border-gray-200 dark:border-gray-700 bg-red-800">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-content-end">
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
                                        fillRule="evenodd"
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
        </nav>
    );
};

export default Header;
