import { useState, useEffect } from "react";
import "./style.css";
import { useQuery } from "@tanstack/react-query";
import { useQueryString } from "../../../utils/utils";
import { Link } from "react-router-dom";
import { getIeltsTestList } from "../../../apis/ielts-listening-test.api";
import { IELTS_TEST_TYPE } from "../../../shared/constant";
import configs from "../../../configs";

const IeltsListeningTestList = () => {
    const queryString = useQueryString();
    const page = Number(queryString.page) || 1;
    const limit = Number(queryString.limit) || 10;

    const { data, isLoading } = useQuery({
        queryKey: ["getIeltsTestList", page],
        queryFn: () => getIeltsTestList(page, limit, '', IELTS_TEST_TYPE.LISTENING),
    });
    
    const ieltsListeningTests = data?.data?.data || [];
    console.log("ieltsListeningTests", ieltsListeningTests)
    const totalPage = data?.data?.meta?.pagination.totalPages || 0;

    return (
        <div>
            <h1 className="text-lg">IeltsListeningTest</h1>
            <div className="container">
                {isLoading && (
                    <div className="skeleton">
                        <div className="skeleton-header"></div>
                        <div className="skeleton-content"></div>
                        <div className="skeleton-content"></div>
                        <div className="skeleton-content"></div>
                        <div className="skeleton-header"></div>
                        <div className="skeleton-content"></div>
                        <div className="skeleton-content"></div>
                        <div className="skeleton-content"></div>
                    </div>
                )}

                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ieltsListeningTests.map((ieltsListeningTest) => (
                            <tr key={ieltsListeningTest.id}>
                                <td>{ieltsListeningTest.id}</td>
                                <td>{ieltsListeningTest.name}</td>
                                <td>
                                    {/* <Link to={}>Start</Link> */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <ul className="pagination">
                    <li className="page-item disabled">
                        <a
                            className="page-link"
                            href="#"
                            tabIndex="-1"
                            aria-disabled="true"
                        >
                            Previous
                        </a>
                    </li>
                    {Array(totalPage)
                        .fill(0)
                        .map((_, index) => {
                            const pageNumber = index + 1;
                            return (
                                <li
                                    className={`page-item ${
                                        pageNumber == page ? "active" : ""
                                    }`}
                                    key={index}
                                >
                                    <Link
                                        className="page-link"
                                        to={`${configs.routes.ieltsListeningTestList}?page=${pageNumber}&limit=2`}
                                    >
                                        {pageNumber}
                                    </Link>
                                </li>
                            );
                        })}
                    <li className="page-item">
                        <a className="page-link" href="#">
                            Next
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default IeltsListeningTestList;
