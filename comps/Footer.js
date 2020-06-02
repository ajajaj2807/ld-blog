import ContactBox from "./ContactBox";

const Footer = () => {
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
      <div className="contact-box">{/* <ContactBox /> */}</div>
    </div>
  );
};

export default Footer;
