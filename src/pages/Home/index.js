import { Fragment } from "react";
import HeroSection from "./HeroSection";
import PopularCourses from "./PopularCourses";
import "./style.css";
import ControlledCarousel from "./Slider";
import { HomeIeltsTips } from "./homeIeltsTips";
const Home = () => {
    return (
        <Fragment>
            <HeroSection></HeroSection>

            {/* <div
                className="py-12"
                style={{
                    width: "100%",
                    height: "400px",
                    background: "orange",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <div>
                    <span className="fs-3 fw-bold">
                        Lộ trình ôn thi IELTS hiệu quả
                    </span>
                </div>

                <div
                    className="d-flex justify-content-around mt-8"
                    style={{ backgroundColor: "green", width: "100%" }}
                >
                    <div
                        className="d-flex justify-content-center align-items-center"
                        style={{
                            height: "200px",
                            width: "20%",
                            backgroundColor: "red",
                            flexDirection: "column",
                        }}
                    >
                        <div
                            style={{
                                height: "100px",
                                width: "100px",
                                backgroundColor: "blue",
                            }}
                        ></div>
                        <div className="text-center">
                            <span className="fs-4 fw-bold">
                                IELTS INTRODUCTION
                            </span>
                        </div>
                    </div>
                </div>
            </div> */}

            <div
                className="d-flex mt-4 bg-red-700 align-items-center flex-column p-4"
                style={{
                    height: "660px",
                    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3);",
                }}
            >
                <div>
                    <span className="fs-3 fw-bold text-white mt-4">
                        Why should you do IELTS online test
                    </span>
                </div>

                <div
                    className="bg-white p-4 mt-8 d-flex justify-content-around align-items-center"
                    style={{
                        height: "85%",
                        width: "90%",
                        border: "5px black solid",
                        borderRadius: "50px",
                        flexWrap: "wrap",
                    }}
                >
                    <div
                        className="d-flex flex-column align-items-center justify-content-center p-8 bg-gray-100"
                        style={{
                            width: "30%",
                            height: "47%",
                            border: "3px black solid",
                            borderRadius: "10px",
                        }}
                    >
                        <div className="" style={{ color: "" }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="50"
                                height="50"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M7.988 12.158c-1.851 0-2.941-1.57-2.941-3.99V7.84c0-2.408 1.101-3.996 2.965-3.996 1.857 0 2.935 1.57 2.935 3.996v.328c0 2.408-1.101 3.99-2.959 3.99M8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895" />
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8" />
                            </svg>
                        </div>

                        <div>
                            <span className="fs-4 fw-bold text-red-700">
                                FREE to practice
                            </span>
                        </div>
                        <div>
                            <span>
                                Our online IELTS tests are always free. We are
                                here to help users for study abroad, immigration
                                and finding jobs.
                            </span>
                        </div>
                    </div>
                    <div
                        className="d-flex flex-column align-items-center justify-content-center p-8 bg-gray-100"
                        style={{
                            width: "30%",
                            height: "47%",
                            border: "3px black solid",
                            borderRadius: "10px",
                        }}
                    >
                        <div className="" style={{ color: "" }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="50"
                                height="50"
                                fill="currentColor"
                                className="bi bi-chevron-double-up"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708z"
                                />
                                <path
                                    fill-rule="evenodd"
                                    d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                                />
                            </svg>
                        </div>

                        <div>
                            <span className="fs-4 fw-bold text-red-700">
                                Increase IELTS score
                            </span>
                        </div>
                        <div>
                            <span>
                                Using our online tests for IELTS preparation is
                                proven to help students improve by 0.5 - 1.5 .
                            </span>
                        </div>
                    </div>
                    <div
                        className="d-flex flex-column align-items-center justify-content-center p-8 bg-gray-100"
                        style={{
                            width: "30%",
                            height: "47%",
                            border: "3px black solid",
                            borderRadius: "10px",
                        }}
                    >
                        <div className="" style={{ color: "" }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="50"
                                height="50"
                                fill="currentColor"
                                className="bi bi-stickies"
                                viewBox="0 0 16 16"
                            >
                                <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1z" />
                                <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2zM3 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V9h-4.5A1.5 1.5 0 0 0 9 10.5V15H3.5a.5.5 0 0 1-.5-.5zm7 11.293V10.5a.5.5 0 0 1 .5-.5h4.293z" />
                            </svg>
                        </div>

                        <div>
                            <span className="fs-5 fw-bold text-red-700">
                                View Evaluated Answer
                            </span>
                        </div>
                        <div>
                            <span>
                                After taking our IELTS mock tests with Speaking
                                or Writing test, you can request to evaluate by
                                examiner
                            </span>
                        </div>
                    </div>
                    <div
                        className="d-flex flex-column align-items-center justify-content-center p-8 bg-gray-100"
                        style={{
                            width: "30%",
                            height: "47%",
                            border: "3px black solid",
                            borderRadius: "10px",
                        }}
                    >
                        <div className="" style={{ color: "" }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="50"
                                height="50"
                                fill="currentColor"
                                className="bi bi-graph-up-arrow"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"
                                />
                            </svg>
                        </div>

                        <div>
                            <span className="fs-4 fw-bold text-red-700">
                                Statistic Tool
                            </span>
                        </div>
                        <div>
                            <span>
                                Our IELTS Analytics is a tool that allows you to
                                set a target IELTS band score, analyse your
                                progress and find how to improve.
                            </span>
                        </div>
                    </div>
                    <div
                        className="d-flex flex-column align-items-center justify-content-center p-8 bg-gray-100"
                        style={{
                            width: "30%",
                            height: "47%",
                            border: "3px black solid",
                            borderRadius: "10px",
                        }}
                    >
                        <div className="" style={{ color: "" }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="50"
                                height="50"
                                fill="currentColor"
                                className="bi bi-chat-left-text"
                                viewBox="0 0 16 16"
                            >
                                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                            </svg>
                        </div>

                        <div>
                            <span className="fs-4 fw-bold text-red-700">
                                Community-driven
                            </span>
                        </div>
                        <div>
                            <span>
                                Created by our community of IELTS teachers,
                                previous IELTS examiners and IELTS exam takers.
                            </span>
                        </div>
                    </div>
                    <div
                        className="d-flex flex-column align-items-center justify-content-center p-8 bg-gray-100"
                        style={{
                            width: "30%",
                            height: "47%",
                            border: "3px black solid",
                            borderRadius: "10px",
                        }}
                    >
                        <div className="" style={{ color: "" }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="50"
                                width="50"
                                viewBox="0 0 512 512"
                            >
                                <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM135.1 217.4c-4.5 4.2-7.1 10.1-7.1 16.3c0 12.3 10 22.3 22.3 22.3H208v96c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V256h57.7c12.3 0 22.3-10 22.3-22.3c0-6.2-2.6-12.1-7.1-16.3L269.8 117.5c-3.8-3.5-8.7-5.5-13.8-5.5s-10.1 2-13.8 5.5L135.1 217.4z" />
                            </svg>
                        </div>

                        <div>
                            <span className="fs-4 fw-bold text-red-700">
                                Update Constantly
                            </span>
                        </div>
                        <div>
                            <span>
                                Real IELTS Listening and IELTS Reading tests
                                based on actual IELTS tests and following the
                                Cambridge IELTS book format.
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <HomeIeltsTips></HomeIeltsTips>
            </div>

            <div className="mt-4">
                <PopularCourses></PopularCourses>
            </div>
        </Fragment>
    );
};
export default Home;
