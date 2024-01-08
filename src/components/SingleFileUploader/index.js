import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { CloudArrowUpFill } from "react-bootstrap-icons";

const SingleFileUploader = ({setUrl}) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };
    const handleUpload = async (e) => {
        e.preventDefault();
        if (file) {
            const formData = new FormData();
            formData.append("file", file);
            // console.log(formData.get("file"));
            try {
                const config = {
                    headers: {
                        "content-type": "multipart/form-data",
                    },
                };
                const res = await axios.post(
                    `${process.env.REACT_APP_WEB_URL}/upload/single-file`,
                    formData,
                    config
                );
                toast.success("Upload successfully");
                setUrl(res.data.data.url)

            } catch (error) {
                toast.error(error);
            }
        }
    };

    return (
        <div className="d-flex align-items-center">
            <div>
                <label htmlFor="file" className="sr-only">
                    Choose a file
                </label>
                <input id="file" type="file" onChange={handleFileChange} />
            </div>
            {file && <button onClick={handleUpload}>
                <CloudArrowUpFill color="blue" size={40}></CloudArrowUpFill>    
            </button>}
        </div>
    );
};

export default SingleFileUploader;
