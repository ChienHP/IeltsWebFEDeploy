import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="https://i2.wp.com/www.influentialenglish.com/wp-content/uploads/2020/07/ielts.png?resize=866%2C650&ssl=1"
            alt="Logo"
            width="40"
            height="30"
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
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
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
                IELTS Courses
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/ielts-courses">
                    IELTS Nguyễn Huyền
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item disabled" to="/">
                    IELTS Fighter
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
                IELTS Exam Library
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/">
                    IELTS Listening Test
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/ielts-reading-test-list">IELTS Reading Test</Link>
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
                IELTS Tips
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
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
