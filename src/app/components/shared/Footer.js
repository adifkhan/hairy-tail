import React from "react";
import style from "../../styles/footer.module.css";
import Image from "next/image";
import logo from "../../assets/logo.png";
import {
  RiArrowRightDoubleLine,
  RiMailFill,
  RiMapPin2Fill,
  RiPhoneFill,
  RiSearchLine,
} from "react-icons/ri";
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__content}>
        <div className={style.footer__img}>
          <Image
            className={style.image}
            src={logo}
            quality={100}
            alt="logo"
          ></Image>
        </div>
        <div className={style.link__wrapper}>
          <h2>Quick link</h2>
          <a href="#">
            <span>
              <RiArrowRightDoubleLine />
            </span>{" "}
            Home
          </a>
          <a href="#">
            <span>
              <RiArrowRightDoubleLine />
            </span>{" "}
            About
          </a>
          <a href="#">
            <span>
              <RiArrowRightDoubleLine />
            </span>{" "}
            shop
          </a>
          <a href="#">
            <span>
              <RiArrowRightDoubleLine />
            </span>{" "}
            salons
          </a>
          <a href="#">
            <span>
              <RiArrowRightDoubleLine />
            </span>{" "}
            faq
          </a>
          <a href="#">
            <span>
              <RiArrowRightDoubleLine />
            </span>{" "}
            contact
          </a>
        </div>
        <div className={style.contact__wrapper}>
          <div>
            <h2>contact us</h2>
          </div>
          <div className={style.contact}>
            <div className={style.contact__icon}>
              <RiMapPin2Fill />
            </div>
            <div>
              <p>Dhanmondi, Dhaka</p>
            </div>
          </div>
          <div className={style.contact}>
            <div className={style.contact__icon}>
              <RiPhoneFill />
            </div>
            <div>
              <p>+880 1301-010101</p>
            </div>
          </div>
          <div className={style.contact}>
            <div className={style.contact__icon}>
              <RiMailFill />
            </div>
            <div>
              <p>example@domain.com</p>
            </div>
          </div>
        </div>
        <div className={style.newsletter}>
          <h2>
            subscribe to our
            <br /> newsletter
          </h2>
          <div className={style.search__box}>
            <input type="text" name="search" placeholder="search..." />
            <div className={style.search}>
              <RiSearchLine />
            </div>
          </div>
        </div>
      </div>
      <p className={style.copyright}>
        Copyright &copy; 2023 || All Right Reserved
      </p>
    </footer>
  );
};

export default Footer;
