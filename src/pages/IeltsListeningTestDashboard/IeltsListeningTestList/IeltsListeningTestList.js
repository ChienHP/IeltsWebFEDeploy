import { useState, useEffect } from "react";
import "./style.css";
import { useQuery } from "@tanstack/react-query";
import { useQueryString } from "../../../utils/utils";
import { Link } from "react-router-dom";
import { deleteIeltsTest } from "../../../apis/ielts-listening-test.api";
import configs from "../../../configs";
import { IELTS_TEST_TYPE } from "../../../shared/constant";
import AddIeltsListeningTest from "../IeltsListeningTestDetail";
import IeltsListeningTestDetail from "../IeltsListeningTestDetail";
import { toast } from "react-toastify";
import { getIeltsTestList } from "../../../apis/ielts-test.api";
import { Button } from "@material-tailwind/react";

const IeltsListeningTestList = () => {
    const queryString = useQueryString();
    const [totalPage, setTotalPage] = useState(0);
    const [page, setPage] = useState(1);
    const limit = 10;
    const [totalItems, setTotalItems] = useState(0);
    const [ieltsListeningTests, setIeltsListeningTests] = useState([]);
    
    useEffect(() => {
        (async () => {
            try {
                const res = await getIeltsTestList(
                    page,
                    limit,
                    null,
                    IELTS_TEST_TYPE.LISTENING
                );
                setTotalPage(res.meta.pagination.totalPages);
                setTotalItems(res.meta.pagination.totalItems);
                setIeltsListeningTests(res.data);
            } catch (error) {
                toast.error(error);
            }
        })();
    }, [page, limit]);

    return (
        <div>
            <h1 className="">Ielts Listening Test List</h1>
            <div className="container">
                <div className="text-right">
                    <IeltsListeningTestDetail mode="create"></IeltsListeningTestDetail>
                </div>

                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-white uppercase bg-red-700">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {ieltsListeningTests.map((ieltsListeningTest) => (
                            <tr
                                key={ieltsListeningTest.id}
                                className="bg-white border-b border-gray-700 text-gray-700 hover:text-red-800"
                            >
                                <td className="px-6 py-4">
                                    {ieltsListeningTest.id}
                                </td>
                                <td className="px-6 py-4">
                                    {ieltsListeningTest.name}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <Link
                                        to={configs.routes.adminIeltsListeningPart.replace(
                                            ":testId",
                                            ieltsListeningTest.id
                                        )}
                                    >
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                            Detail
                                        </button>
                                    </Link>
                                    <IeltsListeningTestDetail
                                        mode="update"
                                        ieltslListeningTest={ieltsListeningTest}
                                    ></IeltsListeningTestDetail>
                                    <button
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                                        onClick={async () => {
                                            try {
                                                await deleteIeltsTest(
                                                    ieltsListeningTest.id
                                                );
                                                toast.success(
                                                    "Delete successfully"
                                                );
                                                window.location.href =
                                                    window.location.href;
                                            } catch (error) {
                                                toast.error(error);
                                            }
                                        }}
                                    >
                                        Detele
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex flex-col items-center">
                    <span className="text-sm text-gray-700 dark:text-gray-400">
                        Showing{" "}
                        <span className="font-semibold text-gray-400">
                            1
                        </span>{" "}
                        to{" "}
                        <span className="font-semibold text-gray-400">
                            10
                        </span>{" "}
                        of{" "}
                        <span className="font-semibold text-gray-400">
                            {totalItems}
                        </span>{" "}
                        Entries
                    </span>
                    <div className="inline-flex mt-2 xs:mt-0">
                        <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        onClick={() => setPage(page => page > 1 ? page - 1 : page)}>
                            <svg
                                className="w-3.5 h-3.5 me-2 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 5H1m0 0 4 4M1 5l4-4"
                                />
                            </svg>
                            Prev
                        </button>
                        <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        onClick={() => setPage(page => page + 1)}>
                            Next
                            <svg
                                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IeltsListeningTestList;
