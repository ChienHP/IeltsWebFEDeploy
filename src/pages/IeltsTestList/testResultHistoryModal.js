import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { createIeltsSpeakingPart } from "../../apis/ielts-speaking-test.api";
import { AuthContext } from "../login/authContext";
import { getManyTestResults } from "../../apis/ielts-test.api";
import { TETS_RESULT_STATUS } from "../../shared/constant";
import { Link } from "react-router-dom";
import configs from "../../configs";

export const TestResultHistoryModal = ({ show, onHide, testId }) => {
    const { user } = useContext(AuthContext);
    const [testResults, setTestResults] = useState(null);
    useEffect(() => {
        (async () => {
            try {
                const res = await getManyTestResults({
                    testId: testId,
                    userId: user.id,
                });
                setTestResults(res.data);
            } catch (error) {
                toast.error(error);
            }
        })();
    }, [testId]);

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <span className="fw-bold fs-4">
                        Test Participate History
                    </span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                    {testResults?.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-lg p-4 flex flex-col items-center shadow"
                            >
                                <Link
                                    key={index}
                                    to={configs.routes.reviewAnswers.replace(
                                        ":testResultId",
                                        item?.id
                                    )}
                                >
                                    <div className="bg-white rounded-lg flex flex-col items-center">
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
                                        {item.bandScore != null && (
                                            <div className="mt-2">
                                                <span className="text-green-700 fw-bold fs-3 border-3 border-green-700 rounded-full px-3 py-2">
                                                    {item.bandScore}
                                                </span>
                                            </div>
                                        )}

                                        <div className="text-center mt-2">
                                            {(item?.status ==
                                                TETS_RESULT_STATUS.EVALUATED && (
                                                <span className="fw-bold text-green-700">
                                                    {item.status} by{" "}
                                                    {item?.reviewerName}
                                                </span>
                                            )) ||
                                                (item?.status ==
                                                    TETS_RESULT_STATUS.PENDING_TO_EVALUATE && (
                                                    <span className="fw-bold text-yellow-600">
                                                        {item.status}
                                                    </span>
                                                ))}
                                        </div>
                                        <div className="text-center">
                                            <div>
                                                <span className="">
                                                    Submitted at:
                                                </span>
                                            </div>
                                            <div className="">
                                                <span className="ml-2 fw-bold">
                                                    {new Date(
                                                        item.createdAt
                                                    ).toLocaleString()}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button
                    className="my-button-74"
                    onClick={() => {
                        onHide();
                    }}
                >
                    Close
                </button>
            </Modal.Footer>
        </Modal>
    );
};
