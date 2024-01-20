import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getIeltsTestDetail } from "../../apis/ielts-listening-test.api";
import { toast } from "react-toastify";
import { CreateWritingPartForm } from "./CreateIeltsWritingPartForm";
import {
    getIeltsWritingPartList,
    updateIeltsWritingPart,
} from "../../apis/ielts-writing-test.api";
import { EditorWrap } from "../../components/Editor";

export const AdminIeltsWritingParts = () => {
    const { testId } = useParams();
    const [test, setTest] = useState(null);
    const [ieltsParts, setIeltsParts] = useState(null);
    const [ieltsPart, setIeltsPart] = useState(null);
    console.log("ieltsPart", ieltsPart);
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
                const res = await getIeltsWritingPartList(testId);
                setIeltsParts(res.data);
                setIeltsPart(res.data[0]);
            } catch (error) {
                toast.error(error);
            }
        })();
    }, []);

    const handleSave = async () => {
        try {
            await updateIeltsWritingPart({
                id: ieltsPart.id,
                content: ieltsPart.partDetail.content,
            });
            toast.success("Save successfully");
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <div>
            <h3>{test?.name}</h3>
            <CreateWritingPartForm
                mode="create"
                testId={Number(testId)}
            ></CreateWritingPartForm>
            <Nav justify variant="tabs" defaultActiveKey="">
                {ieltsParts &&
                    ieltsParts.map((item, index) => {
                        return (
                            <Nav.Item key={index}>
                                <Nav.Link
                                    eventKey={index}
                                    onClick={() => setIeltsPart(item)}
                                >
                                    Part number {item.partNumber}
                                </Nav.Link>
                            </Nav.Item>
                        );
                    })}
            </Nav>

            {ieltsPart && (
                <div className="mt-4">
                    <EditorWrap
                        value={ieltsPart.partDetail.content}
                        onChange={(value) => {
                            setIeltsPart({
                                ...ieltsPart,
                                partDetail: {
                                    ...ieltsPart.partDetail,
                                    content: value,
                                }
                            });
                        }}
                    ></EditorWrap>
                    <div className="d-flex justify-content-end mt-2 mr-2">
                        <button
                            className="my-button-74"
                            onClick={() => handleSave()}
                        >
                            Save
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminIeltsWritingParts;
