import { useState } from "react";
import firebase from "firebase";

const ContactBox = () => {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [content, setContent] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    const adminMsg = {
      name: name,
      email: email,
      content: content,
    };

    var mailer = firebase.functions().httpsCallable("emailMessage");
    mailer(adminMsg);
  };

  return (
    <div className="contact-wrapper">
      <h2>Contact Me</h2>
      <form onSubmit={sendMessage}>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Name"
        ></input>
        <input
          onChange={(e) => setMail(e.target.value)}
          value={email}
          required={true}
          type="email"
          placeholder="Email"
        ></input>
        <div className="t-c-w">
          <textarea
            onChange={(e) => setContent(e.target.value)}
            value={content}
            placeholder="Comment Here"
          ></textarea>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactBox;
