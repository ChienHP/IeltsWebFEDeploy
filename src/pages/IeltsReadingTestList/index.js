import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const IeltsReadingTestList = () => {
  const [data, setData] = useState({
    pagination: {},
    results: [],
  });
  useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await axios("http://localhost:3001/ielts_reading_test/list");
            setData(res.data);
          } catch (err) {
            console.log({ message: err });
          }
        }
    fetchData()
    }, [])
    
  return (
    <div>
      <ul>
        {data.results.map((item, index) => {
          return (
            <li key={index}>
              <Link to="/ielts-reading-test">{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
