"use client";

import React from "react";
import style from "../../styles/contact.module.css";
import {
  RiFacebookFill,
  RiGlobalLine,
  RiInstagramLine,
  RiTwitterFill,
} from "react-icons/ri";

const ContactForm = () => {
  return (
    <div className={style.contact__form}>
      <h2>FORM</h2>
      <form>
        <input type="text" name="name" id="" placeholder="Name" />
        <input type="email" name="email" id="" placeholder="Emain" />
        <input type="text" name="subject" id="" placeholder="Subject" />
        <textarea name="message" placeholder="Your Message Here..."></textarea>
        <button className="button social_trigger">send message</button>
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
