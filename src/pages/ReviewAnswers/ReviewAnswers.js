import { ReviewAnswersListening } from "./ReviewAnswerListening";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getIeltsTestDetail } from "../../apis/ielts-listening-test.api";
import { toast } from "react-toastify";
import {
    getLatestTestResult,
    getTestResultById,
} from "../../apis/ielts-test.api";
import { IELTS_TEST_TYPE } from "../../shared/constant";
import { ReviewAnswersWriting } from "./ReviewAnswerWriting";
import "./styles.css";
import { ReviewAnswersSpeaking } from "./ReviewAnswerSpeaking";

export const ReviewAnswers = () => {
    const { testResultId } = useParams();
    const [test, setTest] = useState(null);
    const [testResult, setTestResult] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const res = await getTestResultById(testResultId);
                setTestResult(res.data);
            } catch (error) {
                toast.error(error);
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            try {
                const res = await getIeltsTestDetail(testResult.testId);
                setTest(res.data);
            } catch (error) {
                toast.error(error);
            }
        })();
    }, [testResult]);

    return (
        <div>
            <div className="fs-2 fw-bold ml-16 mt-10 text-red-800">
                {test?.name}
            </div>
            <div className="fs-3 fw-bold ml-16 mt-8">
                {testResult?.bandScore != null && (
                    <div>
                        Your band score is
                        <span className="ml-2 text-red-800 fs-2">
                            {testResult?.bandScore}
                        </span>
                    </div>
                )}
            </div>
            {(test?.type == IELTS_TEST_TYPE.LISTENING && (
                <ReviewAnswersListening
                    testResult={testResult}
                ></ReviewAnswersListening>
            )) ||
                (test?.type == IELTS_TEST_TYPE.WRITING && (
                    <ReviewAnswersWriting
                        testResult={testResult}
                    ></ReviewAnswersWriting>
                )) ||
                (test?.type == IELTS_TEST_TYPE.SPEAKING && (
                    <ReviewAnswersSpeaking
                        testResult={testResult}
                    ></ReviewAnswersSpeaking>
                ))}
        </div>
    );
};
