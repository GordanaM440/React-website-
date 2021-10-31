import React from "react";
import ContactImg from "../images/contact.jpg";
import "../style/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ContactImg})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name"></label>
          <input name="name" placeholder="First Name" type="text" />
          <label htmlFor="email"></label>
          <input name="email" placeholder="Email" type="email" />
          <label htmlFor="message"></label>
          <textarea
            rows="6"
            placeholder="Enter your message"
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
