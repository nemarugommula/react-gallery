import React, { useState } from "react";
import useFirestore from "../Hooks/useFirestore";
import Image from "../ImageComp/Image";
import Modal from "../Modal/Modal";
import "./Body.css";

const Body = () => {
  const [modelImg, setModelImg] = useState(null);
  const { docs } = useFirestore("images");
  return (
    <div className="body">
      {docs &&
        docs.map((doc) => (
          <Image url={doc.url} key={doc.id} setModelImg={setModelImg} />
        ))}
      {modelImg && <Modal url={modelImg} setModelImg={setModelImg} />}
    </div>
  );
};

export default Body;
