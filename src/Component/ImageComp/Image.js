import React from "react";
import "./Image.css";
import { motion } from "framer-motion";
const Image = ({ url, setModelImg }) => {
  return (
    <motion.img
      src={url}
      alt="images"
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      onClick={() => setModelImg(url)}
      className="image"
    />
  );
};

export default Image;
