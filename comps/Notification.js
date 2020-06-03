import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const Notification = () => {
  const [isOpen, setOpen] = useState(false);
  const notiRef = useRef(null);

  const slideDown = (e) => {
    gsap.from(e.current, 1, {
      y: -500,
      ease: "power4.out",
      delay: 2,
    });
  };

  const handleClose = () => {
    gsap.to(notiRef.current, 1, {
      y: -500,
      ease: "power4.out",
    });
    localStorage.setItem("notified", true);
    setOpen(false);
  };

  useEffect(() => {
    if (localStorage.getItem("notified") == null) setOpen(true);
    console.log(localStorage.getItem("notified"));
  }, []);

  useEffect(() => {
    slideDown(notiRef);
  }, []);

  return (
    <>
      {isOpen ? (
        <div ref={notiRef} className="notification-wrapper">
          <div className="noti-body">
            <span className="noti-type">info</span>
            <span className="noti-content">
              Newsletter facility available now. Click on the Subscribe button
              to Subscribe.
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
