import { useState } from "react";
import SubscribeModal from "./SubscribeModal";

const Subscribe = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="subscribe-wrapper">
      <div className="sub-content">
        <h2 className="sc-title">Subscribe to the Newsletter</h2>
        <span className="sc-info">
          Get all the new articles delivered straight to your inbox
        </span>
      </div>
      <button onClick={() => setModal(true)} className="b-bg-w">
        Subscribe
      </button>
      {modal ? <SubscribeModal closeModal={() => setModal(false)} /> : <> </>}
    </div>
  );
};

export default Subscribe;
