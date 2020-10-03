import React, { useEffect } from "react";
import useStorage from "../Hooks/useStorage";
import { motion } from "framer-motion";
import "./ProgressBar.css";

const ProgressBar = ({ file, setFile }) => {
  const { progress, finalUrl } = useStorage(file);
  useEffect(() => {
    if (finalUrl) setFile(null);
  }, [finalUrl, setFile]);
  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
};

export default ProgressBar;
