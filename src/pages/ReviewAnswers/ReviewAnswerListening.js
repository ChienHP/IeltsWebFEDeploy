import { Pencil } from "react-bootstrap-icons";
import NumberWrapInline from "../../components/Layouts/components(dungchung)/NumberWrapInline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

export const ReviewAnswersListening = ({ testResult }) => {
    return (
        <div className="m-8">
            <div className="d-flex">
                <div className="d-inline-block">
                    <Pencil size={50} color="orange" className=""></Pencil>
                </div>
                <span className="fs-2 fw-bold ml-4">Answer Keys</span>
                <span className="fs-2 fw-bold ml-4">{`(Number of correct answers: `}</span>
                <span className="fs-2 fw-bold ml-4 text-green-500">{testResult?.numberOfCorrectAnswers}</span>
                <span className="fs-2 fw-bold">{`/${testResult?.totalQuestions}`}</span>
                <span className="fs-2 fw-bold">{`)`}</span>
            </div>
            <div className="mt-4" style={{ display: "flex", flexWrap: "wrap" }}>
                {testResult?.userAnswers.map((item, index) => {
                    return (
                        <div
                            className="p-3 fs-5"
                            style={{ flex: "1 0 20%" }}
                            key={index}
                        >
                            <NumberWrapInline
                                number={item.questionNumber}
                            ></NumberWrapInline>
                            <span className="ml-2 text-red-800">
                                {item.key}:
                            </span>

                            <span className="ml-2">{item.answer}</span>

                            <span className="ml-2">
                                {item.isCorrect ? (
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        color="green"
                                    />
                                ) : (
                                    <FontAwesomeIcon
                                        icon={faXmark}
                                        color="red"
                                    />
                                )}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
