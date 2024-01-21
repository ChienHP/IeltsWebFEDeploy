import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getIeltsTestList, getTestResultList } from "../../apis/ielts-test.api";
import { useQueryString } from "../../utils/utils";
import { Link } from "react-router-dom";
import configs from "../../configs";
import { IELTS_TEST_TYPE, TETS_RESULT_STATUS } from "../../shared/constant";

const TestResultList = () => {
    const [testResults, setTestResults] = useState([]);
    const { type } = useQueryString();

    useEffect(() => {
        (async () => {
            try {
                const res = await getTestResultList({
                    page: 1,
                    limit: 100,
                    type,
                    status: TETS_RESULT_STATUS.PENDING_TO_EVALUATE,
                });
                setTestResults(res.data);
            } catch (error) {
                toast.error(error);
            }
        })();
    }, [type]);

    return (
        <div>
            <div className="container mx-auto p-6">
                <div className="bg-white rounded-lg shadow p-6">

                    {/* <!-- Search and Sort --> */}
                    <div className="flex items-center mb-6">
                        <div className="flex border-2 rounded">
                            <input
                                className="px-4 py-2 w-80"
                                placeholder="Enter test name"
                                type="text"
                            />
                            <button className="flex items-center justify-center px-4 border-l">
                                <i className="text-gray-600 fas fa-search"></i>
                            </button>
                        </div>
                        {/* <div className="ml-4 relative">
                            <select className="rounded overflow-hidden border-gray-300 text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                                <option>Newest</option>
                                <option>Oldest</option>
                            </select>
                            <div className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                <i className="fas fa-chevron-down"></i>
                            </div>
                        </div> */}
                    </div>
                    {/* <!-- Test Cards --> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                        {testResults?.map((item, index) => {
                            return (
                                <Link
                                    key={index}
                                    to={configs.routes.reviewAnswers.replace(
                                        ":testResultId",
                                        item?.id
                                    )}
                                >
                                    <div className="bg-white rounded-lg p-4 flex flex-col items-center shadow">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="100"
                                            height="100"
                                            fill="currentColor"
                                            className="bi bi-journal-text"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                                            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                                            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
                                        </svg>
                                        <h3 className="mt-4 text-lg font-semibold text-gray-700 text-center">
                                            {item?.name}
                                        </h3>
                                        <div className="text-sm text-gray-500">
                                            Submitted by:
                                            <span className="text-red-800 font-bold">
                                                {" "}
                                                {item?.fullName}
                                            </span>
                                        </div>
                                        <div className="text-sm text-center">
                                            <span>
                                                Submitted at:{" "}
                                                {new Date(
                                                    item?.createdAt
                                                ).toLocaleString()}
                                            </span>
                                        </div>
                                        {/* <p className="mt-2 text-sm text-gray-600 text text-center">
                                
                            </p> */}
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestResultList;
