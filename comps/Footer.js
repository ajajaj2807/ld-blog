import SubscribeModal from "./SubscribeModal";
import { useState } from "react";

const Footer = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="footer-wrapper">
      <div className="footer-info">
        <span className="footer-thanks">Thank You for visiting!</span>
        <span className="f-mb">
          Made with <span style={{ color: "red" }}> ❤ </span> by Ajay Yadav
        </span>
        <span className="f-sl">
          Made from scratch in React
          <br />I have a project idea. Contact me if interested.
        </span>
      </div>
      <div className="contact-box">
        {/* <ContactBox /> */}
        <button onClick={() => setModal(true)} style={{borderRadius: 8,padding: '0.8em 1.8em' , fontSize: '1.2em'}} className="b-bg-w">
          Subscribe to Newsletter
        </button>
        {modal ? <SubscribeModal closeModal={() => setModal(false)} /> : <> </>}
      </div>
    </div>
  );
};

export default Footer;
