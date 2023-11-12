import { useParams } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import { getIeltsTestPartList } from "../../apis/ielts-listening-test.api";
import { toast } from "react-toastify";

const IeltsListeningTest = () => {

    const {testId} = useParams();
    console.log("testId", testId)
    const [ieltsTestPartList, setIeltsTestPartList] = useState([]);

    useEffect(() => {
        (async (testId) => {
            try {
                const response =  await getIeltsTestPartList(testId);
                setIeltsTestPartList(response.data);
            } catch (error) {
                toast.error(error);
            }
        })(testId);
    }, []);

    return (
        <div>
            <h3>IeltsListeningTest</h3>
        </div>
    )
}

export default IeltsListeningTest;