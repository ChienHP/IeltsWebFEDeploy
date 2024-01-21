import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { FREQUENCY, IELTS_TEST_TYPE } from "../../shared/constant";
import { getAverageScoreByFrequency } from "../../apis/ielts-test.api";
import { toast } from "react-toastify";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const PerformanceCharts = () => {
    const [testType, setTestType] = useState(IELTS_TEST_TYPE.LISTENING);
    const [averageScores, setAverageScores] = useState([]);
    const [frequency, setFrequency] = useState(FREQUENCY.DAILY);

    useEffect(() => {
        (async () => {
            try {
                const params = {
                    testType,
                    userId: 1,
                    startDate: null,
                    endDate: null,
                    frequency,
                };
                console.log(frequency);
                const res = await getAverageScoreByFrequency(params);
                setAverageScores(res.data);
            } catch (error) {
                console.log(error);
                toast.error("Failed to get average scores");
            }
        })();
    }, [testType, frequency]);

    const options = {
        responsive: true,
        scales: {
            y: {
                min: 0,
                max: 9,
            },
        },
    };

    const data = {
        labels: averageScores.map((item) => item.milestone),
        datasets: [
            {
                label: "Average score",
                data: averageScores.map((item) => item.averageScore.toFixed(2)),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                tension: 0.4,
            },
        ],
    };

    return (
        <div>
            <div className="d-flex justify-content-between">
                <div>
                    <button
                        className="my-button-74"
                        onClick={() => {
                            setTestType(IELTS_TEST_TYPE.LISTENING);
                        }}
                    >
                        Listening
                    </button>
                    <button
                        className="my-button-74 ml-4"
                        onClick={() => {
                            setTestType(IELTS_TEST_TYPE.READING);
                        }}
                    >
                        Reading
                    </button>
                    <button
                        className="my-button-74 ml-4"
                        onClick={() => {
                            setTestType(IELTS_TEST_TYPE.SPEAKING);
                        }}
                    >
                        Speaking
                    </button>
                    <button
                        className="my-button-74 ml-4"
                        onClick={() => {
                            setTestType(IELTS_TEST_TYPE.WRITING);
                        }}
                    >
                        Writing
                    </button>
                </div>
                <div>
                    <div>
                        <select
                            className="form-select"
                            value={frequency}
                            onChange={(e) => setFrequency(e.target.value)}
                        >
                            <option>{FREQUENCY.DAILY}</option>
                            <option>{FREQUENCY.MONTHLY}</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="mt-3">
                <span className="fw-bold fs-3 text-red-800">
                    {testType} skill
                </span>
                <Line options={options} data={data} />
            </div>
        </div>
    );
};
