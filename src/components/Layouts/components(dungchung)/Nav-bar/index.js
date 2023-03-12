import { Link } from "react-router-dom";
import "./style.css";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-red sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="https://i2.wp.com/www.influentialenglish.com/wp-content/uploads/2020/07/ielts.png?resize=866%2C650&ssl=1"
            alt="Logo"
            width="50"
            height="40"
            className="d-inline-block align-text-top"
          ></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item nav-item-white">
              <Link className="nav-link active" aria-current="page" to="/">
                <span className="nav-item-white">Home</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/ielts-courses"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="nav-item-white">IELTS Courses</span>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/ielts-courses">
                    IELTS Reading Course
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/ielts-courses">
                    IELTS Listening Course
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="nav-item-white">IELTS Exam Library</span>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/ielts-reading-test-list">
                    IELTS Reading Test
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    IELTS Listening Test
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle disabled"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="nav-item-white">IELTS Tips</span>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/">
                    IELTS Listening Tips
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    IELTS Reading Tips
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
