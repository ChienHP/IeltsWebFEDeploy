import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getIeltsTestList } from "../../apis/ielts-test.api";
import { useQueryString } from "../../utils/utils";
import { Link } from "react-router-dom";
import configs from "../../configs";
import { IELTS_TEST_TYPE } from "../../shared/constant";

const IeltsTestList = () => {
    const [tests, setTests] = useState([]);
    const { type } = useQueryString();

    useEffect(() => {
        (async () => {
            try {
                let res = null;
                if (!type) await getIeltsTestList(1, 100, null, null);
                else res = await getIeltsTestList(1, 100, null, type);
                setTests(res.data);
            } catch (error) {
                toast.error(error);
            }
        })();
    }, [type]);

    return (
        <div>
            <div className="container mx-auto p-6">
                <div className="bg-white rounded-lg shadow p-6">
                    {/* <!-- Skills Filter --> */}
                    {/* <div className="flex space-x-4 mb-6">
                        <button className="bg-gray-200 text-gray-700 rounded-full px-6 py-2 text-sm focus:outline-none">
                            All Skills
                        </button>
                        <button className="text-blue-600 bg-blue-100 rounded-full px-6 py-2 text-sm focus:outline-none">
                            Listening
                        </button>
                        <button className="text-gray-700 bg-gray-200 rounded-full px-6 py-2 text-sm focus:outline-none">
                            Reading
                        </button>
                        <button className="text-gray-700 bg-gray-200 rounded-full px-6 py-2 text-sm focus:outline-none">
                            Writing
                        </button>
                        <button className="text-gray-700 bg-gray-200 rounded-full px-6 py-2 text-sm focus:outline-none">
                            Speaking
                        </button>
                    </div> */}
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
                        {tests.length > 0 &&
                            tests.map((item, index) => {
                                return (
                                    <Link key={index} to={
                                        (item.type === IELTS_TEST_TYPE.LISTENING && configs.routes.ieltsListeningTest.replace(":testId", item.id))
                                        || (item.type === IELTS_TEST_TYPE.READING && configs.routes.ieltsReadingTest.replace(":testId", item.id))
                                        || (item.type === IELTS_TEST_TYPE.WRITING && configs.routes.ieltsWritingTest.replace(":testId", item.id))
                                        || (item.type === IELTS_TEST_TYPE.SPEAKING && configs.routes.ieltsSpeakingTest.replace(":testId", item.id))
                                        }>
                                        <div
                                            className="bg-white rounded-lg p-4 flex flex-col items-center shadow"
                                        >
                                            <img
                                                alt="IELTS Mock Test 2023 book cover"
                                                className="h-32"
                                                height="100"
                                                src="https://ielts.s3.ap-southeast-2.amazonaws.com/IELTS_Mock_Test_book_cover.jpg1700973810336"
                                                width="120"
                                            />
                                            <h3 className="mt-4 text-lg font-semibold text-gray-700 text-center">
                                                {item.name}
                                            </h3>
                                            {/* <p className="text-sm text-gray-500">January</p> */}
                                            {/* <p className="mt-2 text-sm text-gray-600 text text-center">
                                
                            </p> */}
                                            <p className="text-sm text-gray-500">
                                                51 tests taken
                                            </p>
                                            <div className="mt-4 w-full bg-gray-200 rounded-full h-2.5">
                                                <div
                                                    className="bg-blue-600 h-2.5 rounded-full"
                                                    // style={{ width: "0%;" }}
                                                ></div>
                                            </div>
                                            <span className="text-sm font-semibold text-blue-600">
                                                0.0%
                                            </span>
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

export default IeltsTestList;
