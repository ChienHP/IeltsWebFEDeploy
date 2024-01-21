import { faTachometerAverage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PerformanceCharts } from "./PerformanceCharts";


export const UserDashboard = () => {
    return (
        <div>
            <div className="px-8 py-4">
                <div>
                    <span className="fw-bold fs-3 text-red-800">
                        My test performance
                    </span>
                </div>
                <div className="d-flex justify-content-around mt-3">
                    <div
                        className="shadow d-flex flex-column align-items-center justify-content-center"
                        style={{
                            width: "18%",
                            height: "250px",
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="80"
                            height="80"
                            fill="currentColor"
                            className="bi bi-bullseye text-red-700"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
                            <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                        </svg>

                        <div className="mt-2">
                            <span className="fw-bold fs-5">Target Score</span>
                        </div>

                        <div className="mt-2 border-dark border-3 rounded-full p-2">
                            <span className="fw-bold fs-3">6.5</span>
                        </div>
                    </div>
                    <div
                        className="shadow d-flex flex-column align-items-center justify-content-center"
                        style={{
                            width: "18%",
                            height: "250px",
                        }}
                    >
                        <FontAwesomeIcon
                            icon={faTachometerAverage}
                            className="text-red-700"
                            style={{ width: "80px", height: "80px" }}
                        />

                        <div className="mt-2">
                            <span className="fw-bold fs-5">Average Score</span>
                        </div>

                        <div className="mt-2 border-dark border-3 rounded-full p-2">
                            <span className="fw-bold fs-3">5.0</span>
                        </div>
                    </div>
                    <div
                        className="shadow d-flex flex-column align-items-center justify-content-center"
                        style={{
                            width: "18%",
                            height: "250px",
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="80"
                            height="80"
                            fill="currentColor"
                            className="bi bi-journal-text text-red-700"
                            viewBox="0 0 16 16"
                        >
                            <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
                        </svg>

                        <div className="mt-2">
                            <span className="fw-bold fs-5">
                                Total Test Taken
                            </span>
                        </div>

                        <div className="mt-2">
                            <span className="fw-bold fs-3">21</span>
                        </div>
                    </div>
                    <div
                        className="shadow d-flex flex-column align-items-center justify-content-center"
                        style={{
                            width: "18%",
                            height: "250px",
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="80"
                            height="80"
                            fill="currentColor"
                            className="bi bi-check-circle text-red-700"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
                        </svg>

                        <div className="mt-2">
                            <span className="fw-bold fs-5">Accuracy</span>
                        </div>

                        <div className="mt-2">
                            <span className="fw-bold fs-3">58.26%</span>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center">
                    <div className="mt-4 shadow p-4" style={{ width: "80%" }}>
                        <PerformanceCharts></PerformanceCharts>
                    </div>
                </div>
            </div>
        </div>
    );
};
