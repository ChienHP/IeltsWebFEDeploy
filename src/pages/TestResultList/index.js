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
                                        <img
                                            alt="IELTS Mock Test 2023 book cover"
                                            className="h-32"
                                            height="100"
                                            src="https://ielts.s3.ap-southeast-2.amazonaws.com/IELTS_Mock_Test_book_cover.jpg1700973810336"
                                            width="120"
                                        />
                                        <h3 className="mt-4 text-lg font-semibold text-gray-700 text-center">
                                            {item?.name}
                                        </h3>
                                        <div className="text-sm text-gray-500">
                                            Submitted by:
                                            <span className="text-red-800 font-bold"> {item?.fullName}</span>
                                        </div>
                                        <div className="text-sm text-center">
                                            <span>Submitted at: {new Date(item?.createdAt).toLocaleString()}</span>
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
