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
        <iframe seamless className="sg-form-wrapper" src="https://cdn.forms-content.sg-form.com/8e3d3672-a578-11ea-a865-029d430e3b4c" />
        
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
