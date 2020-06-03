import { useState } from "react";

const Notification = () => {
  const [isOpen, setOpen] = useState(true);

  return (
    <>
      {isOpen ? (
        <div className="notification-wrapper">
          <div className="noti-body">
            <span className="noti-type">info</span>
            <span className="noti-content">
              Newsletter facility available now. Click on the Subscribe button
              to Subscribe.
            </span>
          </div>
          <div onClick={() => setOpen(false)} className="noti-close">
            x
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Notification;
