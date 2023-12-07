import { ReviewAnswersListening } from "./ReviewAnswerListening";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getIeltsTestDetail } from "../../apis/ielts-listening-test.api";
import { toast } from "react-toastify";
import { getLatestTestResult } from "../../apis/ielts-test.api";

export const ReviewAnswers = () => {
    const { testId } = useParams();
    const [test, setTest] = useState(null);
    const [testResult, setTestResult] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const res = await getIeltsTestDetail(testId);
                setTest(res.data);
            } catch (error) {
                toast.error(error);
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            try {
                const res = await getLatestTestResult(testId);
                console.log("res", res);
                setTestResult(res.data);
            } catch (error) {
                toast.error(error);
            }
        })();
    }, []);

    return (
        <div>
            <div className="fs-2 fw-bold ml-16 mt-10 text-red-800">
                {test?.name}
            </div>
            <div className="fs-3 fw-bold ml-16 mt-8">
                Your band score is
                <span className="ml-2 text-red-800">{testResult?.bandScore}</span>
            </div>
            
            <ReviewAnswersListening
                testResult={testResult}
            ></ReviewAnswersListening>
        </div>
    );
};
