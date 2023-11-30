import React, { useState } from "react";
import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox,
} from "mdb-react-ui-kit";
import { login, register } from "../../apis/user.api";
import { toast } from "react-toastify";

const initialFormState = {
    fullName: "",
    email: "",
    password: "",
};
function Login() {
    const [justifyActive, setJustifyActive] = useState("tab1");

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
        setFormState(initialFormState);
    };

    const [formState, setFormState] = useState(initialFormState);

    const handleChange = (field) => (e) => {
        console.log(e.target.value);
        setFormState({
            ...formState,
            [field]: e.target.value,
        });
    }

    const handleLogin = async () => {
        try {
            await login({
                email: formState.email,
                password: formState.password,
                rememberMe: 'true',
            });
            toast.success("Login successfully");
        } catch (error) {
            toast.error(error);
        }
    };

    const handleRegister = async () => {
        try {
            await register({
                fullName: formState.fullName,
                email: formState.email,
                password: formState.password,
            });
            toast.success("Register successfully");
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            <MDBTabs
                pills
                justify
                className="mb-3 d-flex flex-row justify-content-between"
            >
                <MDBTabsItem>
                    <MDBTabsLink
                        onClick={() => handleJustifyClick("tab1")}
                        active={justifyActive === "tab1"}
                    >
                        Login
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink
                        onClick={() => handleJustifyClick("tab2")}
                        active={justifyActive === "tab2"}
                    >
                        Register
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
                <MDBTabsPane show={justifyActive === "tab1"}>
                    <div className="text-center mb-3">
                        <p>Sign in with:</p>

                        <div
                            className="d-flex justify-content-between mx-auto"
                            style={{ width: "40%" }}
                        >
                            <MDBBtn
                                tag="a"
                                color="none"
                                className="m-1"
                                style={{ color: "#1266f1" }}
                            >
                                <MDBIcon fab icon="facebook-f" size="sm" />
                            </MDBBtn>

                            <MDBBtn
                                tag="a"
                                color="none"
                                className="m-1"
                                style={{ color: "#1266f1" }}
                            >
                                <MDBIcon fab icon="twitter" size="sm" />
                            </MDBBtn>

                            <MDBBtn
                                tag="a"
                                color="none"
                                className="m-1"
                                style={{ color: "#1266f1" }}
                            >
                                <MDBIcon fab icon="google" size="sm" />
                            </MDBBtn>

                            <MDBBtn
                                tag="a"
                                color="none"
                                className="m-1"
                                style={{ color: "#1266f1" }}
                            >
                                <MDBIcon fab icon="github" size="sm" />
                            </MDBBtn>
                        </div>

                        <p className="text-center mt-3">or:</p>
                    </div>

                    <MDBInput
                        wrapperClass="mb-4"
                        label="Email address"
                        id="form1"
                        type="email"
                        value={formState.email}
                        onChange={handleChange("email")}
                    />
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Password"
                        id="form2"
                        type="password"
                        value={formState.password}
                        onChange={handleChange("password")}
                    />

                    <div className="d-flex justify-content-between mx-4 mb-4">
                        <MDBCheckbox
                            name="flexCheck"
                            value=""
                            id="flexCheckDefault"
                            label="Remember me"
                        />
                        <a href="!#">Forgot password?</a>
                    </div>

                    <MDBBtn className="mb-4 w-100" onClick={handleLogin}>Sign in</MDBBtn>
                    <p className="text-center">
                        Not a member? <a href="#!">Register</a>
                    </p>
                </MDBTabsPane>

                <MDBTabsPane show={justifyActive === "tab2"}>
                    <div className="text-center mb-3">
                        <p>Sign up with:</p>

                        <div
                            className="d-flex justify-content-between mx-auto"
                            style={{ width: "40%" }}
                        >
                            <MDBBtn
                                tag="a"
                                color="none"
                                className="m-1"
                                style={{ color: "#1266f1" }}
                            >
                                <MDBIcon fab icon="facebook-f" size="sm" />
                            </MDBBtn>

                            <MDBBtn
                                tag="a"
                                color="none"
                                className="m-1"
                                style={{ color: "#1266f1" }}
                            >
                                <MDBIcon fab icon="twitter" size="sm" />
                            </MDBBtn>

                            <MDBBtn
                                tag="a"
                                color="none"
                                className="m-1"
                                style={{ color: "#1266f1" }}
                            >
                                <MDBIcon fab icon="google" size="sm" />
                            </MDBBtn>

                            <MDBBtn
                                tag="a"
                                color="none"
                                className="m-1"
                                style={{ color: "#1266f1" }}
                            >
                                <MDBIcon fab icon="github" size="sm" />
                            </MDBBtn>
                        </div>

                        <p className="text-center mt-3">or:</p>
                    </div>

                    <MDBInput
                        wrapperClass="mb-4"
                        label="Username"
                        id="form1"
                        type="text"
                        value={formState.fullName}
                        onChange={handleChange("fullName")}
                    />
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Email"
                        id="form1"
                        type="email"
                        value={formState.email}
                        onChange={handleChange("email")}
                    />
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Password"
                        id="form1"
                        type="password"
                        value={formState.password}
                        onChange={handleChange("password")}
                    />

                    <div className="d-flex justify-content-center mb-4">
                        <MDBCheckbox
                            name="flexCheck"
                            id="flexCheckDefault"
                            label="I have read and agree to the terms"
                        />
                    </div>

                    <MDBBtn className="mb-4 w-100" onClick={handleRegister}>Sign up</MDBBtn>
                </MDBTabsPane>
            </MDBTabsContent>
        </MDBContainer>
    );
}

export default Login;
