import Header from "./Header";
import SideBar from "./SideBar";
const DashboardLayout = ({ children }) => {
  return (
    <div>
      <Header></Header>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 col-lg-3">
            <SideBar></SideBar>
          </div>
          <main className="col-md-7 ms-sm-auto col-lg-9 px-md-4">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
