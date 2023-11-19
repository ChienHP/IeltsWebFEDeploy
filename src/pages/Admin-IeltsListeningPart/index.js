import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
    getIeltsTestDetail,
    getIeltsTestPartList,
} from "../../apis/ielts-listening-test.api";
import { toast } from "react-toastify";

export const AdminIeltsListeningPart = () => {
    const { testId } = useParams();
    const [test, setTest] = useState(null);
    const [ieltsListeningParts, setIeltsListeningParts] = useState(null);
    const [ieltsListeningPart, setIeltsListeningPart] = useState(null);

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
                const res = await getIeltsTestPartList(testId);
                setIeltsListeningParts(res.data);
                setIeltsListeningPart(res.data[0]);
            } catch (error) {
                toast.error(error);
            }
        })();
    }, []);

    return (
        <div>
            <h3>{test?.name}</h3>
            <Nav justify variant="tabs" defaultActiveKey="">
                {/* <Nav.Item>
                    <Nav.Link href="ho/me">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav.Item> */}
                {ieltsListeningParts &&
                    ieltsListeningParts.map((item, index) => {
                        return (
                            <Nav.Item key={index}>
                                <Nav.Link eventKey={index}>
                                    Part number {item.partNumber}
                                </Nav.Link>
                            </Nav.Item>
                        );
                    })}

                <Nav.Item>
                    <Nav.Link eventKey="Add more part">Add more part</Nav.Link>
                </Nav.Item>
            </Nav>
            
            {ieltsListeningPart && (
                <div>
                Audio
                <audio controls>
                    <source src={ieltsListeningPart.audioSrc}></source>
                </audio>
            </div>
            )}
            
        </div>
    );
};

export default AdminIeltsListeningPart;
