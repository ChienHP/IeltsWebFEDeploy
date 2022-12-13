import "./App.css";
import { publicRoutes } from "./routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayouts from "./components/Layouts/DefaultLayouts";
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
