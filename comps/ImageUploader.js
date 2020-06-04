import { useState } from "react";
import { storage, firestore } from "../firebase";

const ImageUploader = () => {
  //image
  const allInputs = { imgUrl: "" };
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);
  const [upText, setUpText] = useState("Upload");
  const [iname, setIName] = useState("");

  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile(image);
    setIName(image.name);
    console.log(image);
  };

  const handleFireBaseUpload = (e) => {
    e.preventDefault();

    // async magic goes here...
    if (imageAsFile === "") {
      return console.error(
        `not an image, the image file is a ${typeof imageAsFile}`
      );
    }
    setUpText("Uploading...");

    const uploadTask = storage.ref(`/images/${iname}`).put(imageAsFile);
    //initiates the firebase side uploading
    uploadTask.on(
      "state_changed",
      (snapShot) => {},
      (err) => {
        console.log(err);
      },
      async () => {
        storage
          .ref("images")
          .child(imageAsFile.name)
          .getDownloadURL()
          .then(async (fireBaseUrl) => {
            setImageAsUrl((prevObject) => ({
              ...prevObject,
              imgUrl: fireBaseUrl,
            }));
            setUpText("Uploaded 🎉");
            const newImage = {
              name: iname,
              url: fireBaseUrl,
            };

            const docRef = await firestore.collection("images").add(newImage);
            const doc = await docRef.get();
            console.log(doc);
            alert("Created Successfully!");
          });
      }
    );
  };

  return (
    <div className="image-uploader-wrapper">
      <div className="iu-info">
        <h2>Image Uploader</h2>
        <p>
          Upload images to storage from here, get the link and put it in the
          article while creating.{" "}
        </p>
      </div>
      <div className="img-uploader-wrapper">
        <h3>Select image to upload to cloud storage</h3>
        <p>{imageAsFile.name}</p>
        <form onSubmit={handleFireBaseUpload}>
          <input
            id="file"
            className="img-u-btn"
            type="file"
            onChange={handleImageAsFile}
          />
          <label htmlFor="file">Choose a File</label>
          <br/>
          <button>{upText}</button>
        </form>
      </div>
      <div className="iu-links">
        Available Link:
        {" " + imageAsUrl.imgUrl + " "}
        <br />
        Image link will also be added in database in /images/:id
      </div>
    </div>
  );
};

export default ImageUploader;
