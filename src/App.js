import "./App.css";
import { publicRoutes, privateRoutes } from "./routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayouts from "./components/Layouts/DefaultLayouts";
import DashboardLayout from "./components/Layouts/DashboardLayout";
import { Fragment, useContext } from "react";
import { AuthContext } from "./pages/login/authContext";
import Login from "./pages/login";

function App() {
    const { user } = useContext(AuthContext);
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map(
                        (
                            {
                                path,
                                Component,
                                Layout = DefaultLayouts,
                                data = null,
                                role = null,
                            },
                            index
                        ) => {
                            Layout ??= Fragment;
                            if (role && !role.includes(user?.roles[0])) {
                                return (
                                    <Route
                                        key={index}
                                        path={path}
                                        element={
                                            <Layout>
                                                <Login></Login>
                                            </Layout>
                                        }
                                    ></Route>
                                );
                            }
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
                        }
                    )}

                    {privateRoutes.map(
                        (
                            {
                                path,
                                Component,
                                Layout = DashboardLayout,
                                data = null,
                            },
                            index
                        ) => {
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
                        }
                    )}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
