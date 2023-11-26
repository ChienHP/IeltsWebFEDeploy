import { Link } from "react-router-dom";
import "./style.css";
import configs from "../../../../configs";
const NavBar = () => {
  return (
    <nav className="bg-red-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
                <div className="flex-1 flex items-center justify-start">
                    <div className="flex-shrink-0 flex items-center">
                        <i className="fas fa-home text-white text-2xl"></i>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to={configs.routes.ieltsTestList + '?type=Reading'}>IELTS Reading Test</Link>
                                <Link className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to={configs.routes.ieltsTestList + '?type=Listening'}>IELTS Listening Test</Link>
                                <Link className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to={configs.routes.ieltsTestList + '?type=Writing'}>IELTS Writing Test</Link>
                                <Link className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to={configs.routes.ieltsTestList + '?type=Speaking'}>IELTS Speaking Test</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-end flex-1">
                    <a href="#" className="bg-red-600 text-white px-3 py-2 rounded-md text-sm font-medium">InterGreat Study Abroad</a>
                    <div className="ml-4 flex items-center md:ml-6">
                        <button className="bg-red-800 p-1 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white">
                            <span className="sr-only">View notifications</span>
                            <i className="fas fa-bell"></i>
                        </button>
                        <div className="ml-3 relative">
                            <div className="flex items-center space-x-3">
                                <div className="bg-blue-600 text-white text-sm rounded-full h-8 w-8 flex items-center justify-center">V</div>
                                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Lê Chiến</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  );
};
export default NavBar;
