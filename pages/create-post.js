import { useState, useContext } from "react";
import { firestore, storage } from "../firebase";
import { collectIdsAndDocs } from "../utils";
const ReactMarkdown = require("react-markdown/with-html");

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [des, setDes] = useState("");
  //image
  const allInputs = { imgUrl: "" };
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);
  const [upText, setUpText] = useState("Upload");

  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile(image);
    console.log(image);
  };

  const submitPost = async (e) => {
    e.preventDefault();

    const createdAt = Date.parse(Date());

    const post = {
      title,
      content,
      by: author,
      likes: 0,
      views: 0,
      createdAt,
      description: des,
      imgUrl: imageAsUrl.imgUrl,
    };

    const docRef = await firestore.collection("posts").add(post);
    const doc = await docRef.get();

    const newPost = collectIdsAndDocs(doc);
    console.log(newPost);
    alert("Created Successfully!");
  };

  const handleFireBaseUpload = (e) => {
    e.preventDefault();
    console.log("Uploading...");

    setUpText("Uploading...");
    // async magic goes here...
    if (imageAsFile === "") {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`);
    }
    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);
    //initiates the firebase side uploading
    uploadTask.on(
      "state_changed",
      (snapShot) => {},
      (err) => {
        console.log(err);
      },
      () => {
        storage
          .ref("images")
          .child(imageAsFile.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            setImageAsUrl((prevObject) => ({
              ...prevObject,
              imgUrl: fireBaseUrl,
            }));
            setUpText("Uploaded 🎉");
          });
      }
    );
  };
  return (
    <div className="create-wrapper">
      <h2>Create Post</h2>
      

      {/* image uploading */}
      <div className="img-uploader-wrapper">
        <h3>Upload Post Cover Image</h3>
        <p>{imageAsFile.name}</p>
        <form onSubmit={handleFireBaseUpload}>
          <input
            id="file"
            className="img-u-btn"
            type="file"
            onChange={handleImageAsFile}
          />
          <label htmlFor="file">Choose a File</label>
          <button>{upText}</button>
        </form>
      </div>

      <form onSubmit={submitPost}>
        <input
          placeholder="Post Title"
          vaule={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
        ></input>
        <br />
        <input
          placeholder="Author's Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          name="author"
        ></input>
        <br />

        <textarea
          placeholder="Post Description Here"
          className="cp-des"
          name="des"
          onChange={(e) => setDes(e.target.value)}
          value={des}
        ></textarea>
        <br />

        <textarea
          placeholder="Post Content Goes Here"
          className="cp-content"
          name="content"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        ></textarea>
        <br />
        <button type="submit">Create Post</button>
        <div className="img-wrn">
          {imageAsUrl.imgUrl.length == 0
            ? "Warning: No Image Uploaded. You need to upload the image first."
            : ""}
        </div>
      </form>
      <br />
      <br />
      <br />
      <div className="preview-wrapper">
        Content Preview:
        <br />
        <br />
        <h2>{title}</h2>
        <p>by {author}</p>
        ---------------------------------------------
        <div className="preview-bc">
          <ReactMarkdown source={content} escapeHtml={false} />
        </div>
      </div>
    </div>
  );
};

export default Create;
