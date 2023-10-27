import { useState, useEffect } from "react";
import { getIeltsListeningTests } from "../../apis/ielts-listening-test.api";

import "./style.css";

const IeltsListeningTest = () => {
    const [ieltsListeningTests, setIeltsListeningTests] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);

        getIeltsListeningTests()
            .then((data) => {
                setIeltsListeningTests(data);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    console.log(ieltsListeningTests);
    return (
        <div>
            <h1 className="text-lg">IeltsListeningTest</h1>
            {isLoading && (
                <div class="skeleton">
                    <div class="skeleton-header"></div>
                    <div class="skeleton-content"></div>
                    <div class="skeleton-content"></div>
                    <div class="skeleton-content"></div>
                    <div class="skeleton-header"></div>
                    <div class="skeleton-content"></div>
                    <div class="skeleton-content"></div>
                    <div class="skeleton-content"></div>
                </div>
            )}
        </div>
    );
};

export default IeltsListeningTest;
