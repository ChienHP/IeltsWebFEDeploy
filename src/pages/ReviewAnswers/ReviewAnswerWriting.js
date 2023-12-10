import { Pencil } from "react-bootstrap-icons";
import { Button } from "../../components/Button";
import { requestToGetEvaluatedByExaminer } from "../../apis/ielts-test.api";
import { toast } from "react-toastify";

export const ReviewAnswersWriting = ({ testResult }) => {
    const handleRequestToEvaluate = async () => {
        try {
            await requestToGetEvaluatedByExaminer(testResult?.id);
            toast.success("Request sent successfully");
        } catch (error) {
            toast.error(error);
        }
    };
    return (
        <div className="m-8">
            <div className="d-flex" style={{justifyContent: 'space-between'}}>
                <div style={{ display: "flex" }}>
                    <div className="">
                        <Pencil size={50} color="orange" className=""></Pencil>
                    </div>
                    <span className="fs-2 fw-bold ml-4">Yours Answer</span>
                </div>
                <div className="d-flex">
                    <div className="ml-">
                        <Button>Evaluate with AI</Button>
                    </div>
                    <div className="ml-4">
                        <Button onClick={() => handleRequestToEvaluate()}>Request to evaluate</Button>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                {testResult?.userAnswers.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="border-double border-4 border-red-800 rounded-3xl mb-16"
                        >
                            <div className="p-8">
                                <div className="fs-2 text-red-800 fw-bold text-center">
                                    Part {item?.partNumber}
                                </div>
                                <div
                                    className="mt-4"
                                    style={{ display: "flex" }}
                                >
                                    <div
                                        className="border-dashed border-4 border-red-800 rounded-3xl p-4"
                                        style={{ flex: "1 0 55%" }}
                                    >
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: item?.question,
                                            }}
                                        ></div>
                                    </div>
                                    <div
                                        className="border-double border-4 border-red-800 rounded-3xl p-4 ml-4 text-red-700 fs-5"
                                        style={{ flex: "1 0 45%" }}
                                    >
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: item?.answer,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
