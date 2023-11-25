import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getIeltsTestDetail } from "../../apis/ielts-listening-test.api";
import { toast } from "react-toastify";
import { EditorWrap } from "../../components/Editor";
import { createIeltsReadingPart } from "../../apis/ielts-reading-test.api";

const AdminIeltsReadingPart = () => {
    const { testId } = useParams();
    const [test, setTest] = useState(null);

    const [formState, setFormState] = useState({
        partNumber: 0,
        title: "",
        paragraphs: "",
    });

    const handleChange = (field) => (e) => {
        if (typeof formState[field] === "number") {
            setFormState({
                ...formState,
                [field]: parseInt(e.target.value),
            });
            return;
        }

        setFormState({
            ...formState,
            [field]: e.target.value,
        });
    };

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("formState", formState);
        try {
            await createIeltsReadingPart({
                testId: test.id,
                ...formState,
            });
            toast.success("Create successfully");
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <div>
            <h3>{test?.name}</h3>
            <div>
                <div>
                    <label>Part Number</label>
                    <input
                        type="number"
                        value={formState.partNumber || ""}
                        onChange={handleChange("partNumber")}
                    ></input>
                </div>

                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        value={formState.title}
                        onChange={handleChange("title")}
                    ></input>
                </div>

                <div>
                    <label>Paragraphs</label>
                    <EditorWrap
                        value={formState.paragraphs}
                        onChange={(content) => {
                            setFormState({
                                ...formState,
                                paragraphs: content,
                            });
                        }}
                    ></EditorWrap>
                </div>

                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default AdminIeltsReadingPart;
