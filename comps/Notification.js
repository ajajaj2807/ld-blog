import { useState, useRef, useEffect } from "react";

const Notification = ({type, children}) => {
  const [isOpen, setOpen] = useState(false);
  const notiRef = useRef(null);


  const handleClose = () => {
    localStorage.setItem("notified", true);
    setOpen(false);
  };

  useEffect(() => {
    if (localStorage.getItem("notified") == null) {
      setOpen(true);
    }
  }, []);

  return (
    <>
      {isOpen ? (
        <div ref={notiRef} className="notification-wrapper">
          <div className="noti-body">
            <span className="noti-type"> {type} </span>
            <span className="noti-content">
              {children}
            </span>
          </div>
          <div onClick={handleClose} className="noti-close">
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
