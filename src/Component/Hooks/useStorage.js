import { useState, useEffect } from "react";
import {
  projectFirestore,
  projectStorage,
  timeStamp,
} from "../../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(null);
  const [finalUrl, setFinalUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let storageRef = projectStorage.ref(file.name);
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
        console.log(`progress ${percentage}`);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const firestoreRef = projectFirestore.collection("images");

        console.log("completed");
        let url = await storageRef.getDownloadURL();
        console.log(url);
        setFinalUrl(url);
        const createdAt = timeStamp();
        await firestoreRef.add({ url, createdAt });
      }
    );
  }, [file]);

  return { progress, finalUrl, error };
};

export default useStorage;
