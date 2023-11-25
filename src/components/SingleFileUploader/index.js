import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const SingleFileUploader = (setUrl) => {
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
                console.log(1)
                console.log(2)

            } catch (error) {
                toast.error(error);
            }
        }
    };

    return (
        <>
            <div>
                <label htmlFor="file" className="sr-only">
                    Choose a file
                </label>
                <input id="file" type="file" onChange={handleFileChange} />
            </div>
            {/* {file && (
                <section>
                    File details:
                    <ul>
                        <li>Name: {file.name}</li>
                        <li>Type: {file.type}</li>
                        <li>Size: {file.size} bytes</li>
                    </ul>
                </section>
            )} */}
            {file && <button onClick={handleUpload}>Upload a file</button>}
        </>
    );
};

export default SingleFileUploader;
