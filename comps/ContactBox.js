import { useState } from "react";
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(
  "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"
);

const ContactBox = () => {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [content, setContent] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    const adminMsg = {
      to: "ajajaj2807@gmail.com",
      from: email,
      subject: "New Message from the Blog",
      text: `By: ${name}, Content: ${content}`,
    };
    const userCopy = {
      to: email,
      from: "ajajaj2807@gmail.com",
      subject: "From Ajay, with 💖",
      text: `Your message was sent successfully. I will try to get back to you ASAP. This message was sent to you because you tried to contact Ajay from www.ajay.rocks. If it wasn't you, Please ignore this mail.`,
    };
    sgMail.send(adminMsg);
    console.log("sent to admin");
    sgMail.send(userCopy);
    console.log("sent to user");
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
