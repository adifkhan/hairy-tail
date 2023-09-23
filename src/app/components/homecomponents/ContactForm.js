"use client";

import React, { useState } from "react";
import style from "../../styles/contact.module.css";
import {
  RiFacebookFill,
  RiGlobalLine,
  RiInstagramLine,
  RiTwitterFill,
} from "react-icons/ri";

const ContactForm = () => {
  const [messageInfo, setMessageInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleMessage = (event) => {
    event.preventDefault();
    console.log(messageInfo);
  };
  return (
    <div className={style.contact__form}>
      <h2>FORM</h2>
      <form onSubmit={handleMessage}>
        <input
          type="text"
          name="name"
          id=""
          placeholder="Name"
          onChange={(e) =>
            setMessageInfo({ ...messageInfo, name: e.target.value })
          }
        />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Emain"
          onChange={(e) =>
            setMessageInfo({ ...messageInfo, email: e.target.value })
          }
        />
        <input
          type="text"
          name="subject"
          id=""
          placeholder="Subject"
          onChange={(e) =>
            setMessageInfo({ ...messageInfo, subject: e.target.value })
          }
        />
        <textarea
          name="message"
          placeholder="Your Message Here..."
          onChange={(e) =>
            setMessageInfo({ ...messageInfo, message: e.target.value })
          }
        ></textarea>
        <button className="button">send message</button>
      </form>
      <section className={style.social__icon}>
        <div className={style.icon}>
          <RiFacebookFill />
        </div>
        <div className={style.icon}>
          <RiInstagramLine />
        </div>
        <div className={style.icon}>
          <RiTwitterFill />
        </div>
        <div className={style.icon}>
          <RiGlobalLine />
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
