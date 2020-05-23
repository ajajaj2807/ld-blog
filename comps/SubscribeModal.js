import { useState } from "react";

const SubscribeModal = ({ closeModal }) => {
  const [sub, setSub] = useState(false);

  const handleSubmit = () => {
    setSub(true);
  };
  return (
    <div className="sub-modal-wrapper">
      <div onClick={closeModal} className="close-wrapper"></div>
      <div className="sm-overlay">
      <h2>Coming Soon 📣</h2>
        {/* <div className="sm-details">
          <span className="sm-title">Subscribe to the Newsletter</span>
          <span className="sm-info">
            Get the latest articles delivered straight to your inbox
          </span>
        </div>
        <div className="sm-form">
          <input
            className="sm-input"
            name="email"
            type="email"
            placeholder="Enter Your Email"
          ></input>
          <button onClick={handleSubmit} className="sm-btn">
            {sub ? "Subscribed 🎉" : "Subscribe"}
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default SubscribeModal;
