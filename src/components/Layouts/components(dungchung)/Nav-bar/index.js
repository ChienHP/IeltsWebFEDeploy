const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="https://i2.wp.com/www.influentialenglish.com/wp-content/uploads/2020/07/ielts.png?resize=866%2C650&ssl=1"
            alt="Logo"
            width="40"
            height="30"
            className="d-inline-block align-text-top"
          ></img>
        </a>
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
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/ielts-courses"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                IELTS Courses
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/ielts-courses">
                    IELTS Nguyễn Huyền
                  </a>
                </li>
                <li>
                  <a className="dropdown-item disabled" href="/">
                    IELTS Fighter
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                IELTS Exam Library
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    IELTS Listening Test
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/ielts-reading-test">
                    IELTS Reading Test
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle disabled"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                IELTS Tips
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    IELTS Listening Tips
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    IELTS Reading Tips
                  </a>
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
