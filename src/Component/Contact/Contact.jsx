import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { useState } from "react";
const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_479scrd",
        "template_duyguxc",
        form.current,
        "2OD1x7330_eRXFv20"
      )
      .then(
        (result) => {
          alert(result.text);
          setDone(true);
        },
        (error) => {
          alert(error.text);
        }
      );
  };
  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span>Get in touch</span>
          <span>Contact me</span>
          <div
            style={{ background: "#ABF1FF94" }}
            className="blur s-blur1"
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="user"
            name="name"
            placeholder="Enter Name Here"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email Here"
            className="user"
          />
          <textarea
            name="comment"
            className="user"
            placeholder="Enter Your Message"
          ></textarea>
          <span style={{ color: "blue" }}>
            {done && "Email sent Successfully, Thanks for contact with me"}
          </span>
          <input type="submit" value="Send" className="btn" />

          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
