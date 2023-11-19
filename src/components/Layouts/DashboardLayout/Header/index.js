import "./style.css"

const Header = () => {
  return (
    <header className="navbar navbar-dark sticky-top bg-red flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
      </a>
      <div className="navbar-nav">
        <div className="nav-item text-nowrap">
          <a className="nav-link px-3" href="#">
            <button className="btn btn-secondary">Logout</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
