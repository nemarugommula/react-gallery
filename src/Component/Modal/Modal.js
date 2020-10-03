import React from "react";
import "./Modal.css";
import { motion } from "framer-motion";

const Modal = ({ url, setModelImg }) => {
  const clickHandler = (e) => {
    if (e.target.classList.contains("Modal")) setModelImg(null);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="Modal"
      onClick={clickHandler}
    >
      <motion.img
        src={url}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        alt="detailed"
      />
    </motion.div>
  );
};

export default Modal;
