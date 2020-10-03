import React, { useState } from "react";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import "./Upload.css";
import ProgressBar from "../ProgressBar/ProgressBar";

const Upload = () => {
  const [file, setFile] = useState(null);
  const changeHandle = (e) => {
    let select = e.target.files[0];
    if (select) {
      setFile(select);
    }
  };

  return (
    <div className="upload">
      <CloudUploadIcon fontSize="large" className="upload-icon" />
      <form>
        <input type="file" className="" onChange={changeHandle} />
      </form>
      <br />
      {file && (
        <ProgressBar
          className="upload-progressbar"
          file={file}
          setFile={setFile}
        />
      )}
    </div>
  );
};

export default Upload;
