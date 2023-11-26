// import { useState, useEffect } from "react";
// import "./style.css";
// import { useQuery } from "@tanstack/react-query";
// import { useQueryString } from "../../../utils/utils";
// import { Link } from "react-router-dom";
// import { deleteIeltsTest } from "../../../apis/ielts-listening-test.api";
// import configs from "../../../configs";
// import { IELTS_TEST_TYPE } from "../../../shared/constant";
// import AddIeltsListeningTest from "../IeltsListeningTestDetail";
// import IeltsListeningTestDetail from "../IeltsListeningTestDetail";
// import { toast } from "react-toastify";

// const IeltsListeningTestList = () => {
//     const queryString = useQueryString();
//     const page = Number(queryString.page) || 1;
//     const limit = Number(queryString.limit) || 2;

//     const { data, isLoading } = useQuery({
//         queryKey: ["getIeltsTestList", page],
//         queryFn: () =>
//             getIeltsTestList(page, limit, "", IELTS_TEST_TYPE.LISTENING),
//     });

//     const ieltsListeningTests = data?.data?.data || [];
//     const totalPage = data?.data?.meta?.pagination.totalPages || 0;

//     return (
//         <div>
//             <h1 className="text-lg">Ielts Listening Test List</h1>
//             <div className="container">
//                 {isLoading && (
//                     <div className="skeleton">
//                         <div className="skeleton-header"></div>
//                         <div className="skeleton-content"></div>
//                         <div className="skeleton-content"></div>
//                         <div className="skeleton-content"></div>
//                         <div className="skeleton-header"></div>
//                         <div className="skeleton-content"></div>
//                         <div className="skeleton-content"></div>
//                         <div className="skeleton-content"></div>
//                     </div>
//                 )}

//                 <IeltsListeningTestDetail mode='create'></IeltsListeningTestDetail>

//                 <table className="table table-bordered">
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {ieltsListeningTests.map((ieltsListeningTest) => (
//                             <tr key={ieltsListeningTest.id}>
//                                 <td>{ieltsListeningTest.id}</td>
//                                 <td>{ieltsListeningTest.name}</td>
//                                 <td>
//                                     <button>Detail</button>
//                                     <IeltsListeningTestDetail mode='update' ieltslListeningTest={ieltsListeningTest}></IeltsListeningTestDetail>
//                                     <button onClick={async () => {
//                                         try {
//                                             await deleteIeltsTest(ieltsListeningTest.id)
//                                             toast.success("Delete successfully");
//                                             window.location.href = window.location.href
//                                         } catch (error) {
//                                             toast.error(error);
//                                         }
//                                     }}>Detele</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>

//                 <ul className="pagination">
//                     <li className="page-item disabled">
//                         <a
//                             className="page-link"
//                             href="#"
//                             // @ts-ignore
//                             tabIndex="-1"
//                             aria-disabled="true"
//                         >
//                             Previous
//                         </a>
//                     </li>
//                     {Array(totalPage)
//                         .fill(0)
//                         .map((_, index) => {
//                             const pageNumber = index + 1;
//                             return (
//                                 <li
//                                     className={`page-item ${
//                                         pageNumber == page ? "active" : ""
//                                     }`}
//                                     key={index}
//                                 >
//                                     <Link
//                                         className="page-link"
//                                         to={`${configs.routes.ieltsListeningTestDashboard}?page=${pageNumber}&limit=2`}
//                                     >
//                                         {pageNumber}
//                                     </Link>
//                                 </li>
//                             );
//                         })}
//                     <li className="page-item">
//                         <a className="page-link" href="#">
//                             Next
//                         </a>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default IeltsListeningTestList;
