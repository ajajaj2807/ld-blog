import { useEffect, useState } from "react";
import { firestore } from "../firebase";
import { collectIdsAndDocs } from "../utils";

const ImageViewer = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await firestore.collection("images").get();
      const images = snapshot.docs.map(collectIdsAndDocs);
      setImages(images);
    };

    fetchData();
  }, []);

  const copyUrl = (image) => {
    const link = `<img src="${image.url}" width="100%" />`;
    navigator.clipboard.writeText(link);
    console.log(`Copied '${image.name}' URL to clipboard`);
  };

  return (
    <div className="ip-wrapper">
      <h3>Images available to insert:</h3>
      <p>
        {" "}
        Click on any image to copy link. To add an image, go to assests uploader
        page
      </p>
      <div className="image-preview-box">
        {images.map((image) => (
          <div key={image.name}>
            <img
              onClick={() => copyUrl(image)}
              className="image-thumb"
              src={image.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageViewer;
