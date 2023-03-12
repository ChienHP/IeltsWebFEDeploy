import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReadingTestLogo from "./ReadingTestLogo.png";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
export const IeltsReadingTestList = () => {
  const [data, setData] = useState({
    pagination: {},
    results: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios(
          "http://localhost:3001/ielts_reading_test/list"
        );
        setData(res.data);
      } catch (err) {
        console.log({ message: err });
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {data.results.map((item, index) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={ReadingTestLogo} />
              <Card.Body>
                <Link to={`/ielts-reading-test/${item.id}`}>
                  <Card.Title>{item.name}</Card.Title>
                  <Button variant="primary">Bắt đầu</Button>
                </Link>
              </Card.Body>
            </Card>
          );
        })}
      </ul>
    </div>
  );
};
