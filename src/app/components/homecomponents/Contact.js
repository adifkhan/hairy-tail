import React from "react";
import style from "@/styles/contact.module.css";
import { RiMailFill, RiMapPin2Fill, RiPhoneFill } from "react-icons/ri";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className={style.contact__container}>
      <div className={style.contact__wrapper}>
        <div className="heading">
          <h2>contact us</h2>
        </div>
        <div className={style.contact}>
          <div className={style.contact__icon}>
            <RiMapPin2Fill />
          </div>
          <div>
            <h3>Location</h3>
            <p>Dhanmondi, Dhaka</p>
          </div>
        </div>
        <div className={style.contact}>
          <div className={style.contact__icon}>
            <RiPhoneFill />
          </div>
          <div>
            <h3>Phone</h3>
            <p>+880 1301-010101</p>
          </div>
        </div>
        <div className={style.contact}>
          <div className={style.contact__icon}>
            <RiMailFill />
          </div>
          <div>
            <h3>Message</h3>
            <p>example@domain.com</p>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
