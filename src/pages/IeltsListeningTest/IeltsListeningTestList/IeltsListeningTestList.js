import { useState, useEffect } from "react";
import { getIeltsListeningTests } from "../../../apis/ielts-listening-test.api";
import "./style.css";
import { useQuery } from "@tanstack/react-query";
import { useQueryString } from "../../../utils/utils";
import { Link } from "react-router-dom";

const IeltsListeningTestList = () => {
    const queryString = useQueryString();
    const page = Number(queryString.page) || 1;
    const limit = Number(queryString.limit) || 10;

    const { data, isLoading } = useQuery({
        queryKey: ["ieltsListeningTests", page],
        queryFn: () => getIeltsListeningTests(page, limit),
    });

    const ieltsListeningTests = data?.data?.data || [];
    const totalPage = data?.data?.meta?.pagination.totalPages || 0;

    return (
        <div>
            <h1 className="text-lg">IeltsListeningTest</h1>
            <div className="container">
                <div>
                    <Link to="/ielts-listening-test/add-new-test">
                        <button className="btn btn-primary">
                            <span>Add new test</span>
                        </button>
                    </Link>
                </div>

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
                        </tr>
                    </thead>
                    <tbody>
                        {ieltsListeningTests.map((ieltsListeningTest) => (
                            <tr key={ieltsListeningTest.id}>
                                <td>{ieltsListeningTest.id}</td>
                                <td>{ieltsListeningTest.name}</td>
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
                                        to={`/ielts-listening-test?page=${pageNumber}&limit=2`}
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
