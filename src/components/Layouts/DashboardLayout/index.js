import Header from "./Header";
import SideBar from "./SideBar";
const DashboardLayout = ({ children }) => {
  return (
    <div>
      <Header></Header>

      <div className="container-fluid">
        <div className="row">
          <SideBar></SideBar>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
