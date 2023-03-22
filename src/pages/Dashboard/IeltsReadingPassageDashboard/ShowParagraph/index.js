import axios from "axios";
import { useEffect, useState } from "react";
export const ShowParagraph = ({ passageId }) => {
  const [paragraphs, setParagraphs] = useState("");
  useEffect(() => {
    const fetchData = async (passageId) => {
      try {
        const res = await axios.get(
          `http://localhost:3001/ielts_reading_passage/get/${passageId}`
        );
        setParagraphs(res.data.paragraphs);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData(passageId);
  }, []);

  const handleSave = async () => {
    try {
      const res = await axios.post("http://localhost:3001/ielts_reading_passage/update", {
        id: passageId,
        paragraphs
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <textarea
        style={{ width: "100%", height: "500px" }}
        value={paragraphs}
        onChange={(e) => {
          console.log(paragraphs)
          setParagraphs(e.target.value);
        }}
        className="show-paragraph-textarea"
      ></textarea>
      <button className="btn btn-warning" style={{ float: "right" }} onClick={handleSave}>
        Save
      </button>
    </div>
  );
};
