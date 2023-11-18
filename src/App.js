import "./App.css";
import { publicRoutes, privateRoutes } from "./routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayouts from "./components/Layouts/DefaultLayouts";
import DashboardLayout from "./components/Layouts/DashboardLayout";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map(({ path, Component, Layout = DefaultLayouts, data = null}, index) => {
            Layout ??= Fragment;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Layout>
                    <Component></Component>
                  </Layout>
                }
              ></Route>
            );
          })}

          {privateRoutes.map(({path, Component, Layout = DashboardLayout, data = null}, index) => {
            Layout ??= Fragment
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Layout>
                    <Component></Component>
                  </Layout>
                }
                ></Route>
            )
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
