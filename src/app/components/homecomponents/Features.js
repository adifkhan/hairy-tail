"use client";

import React, { useEffect } from "react";
import style from "../../styles/features.module.css";
import Image from "next/image";
import bottle1 from "../../assets/products/bottle1.png";
import bottle2 from "../../assets/products/bottle2.png";
import bottle3 from "../../assets/products/bottle3.png";
import bottle4 from "../../assets/products/bottle4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import './styles.css';
import { Pagination } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  // animation starts here //
  useEffect(() => {
    gsap.from(".myslide", {
      y: 300,
      opacity: 0,
      duration: 1,
      ease: "circ.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".slider",
        start: "top 70%",
        toggleActions: "restart none none reset",
      },
    });
  }, []);
  // animation ends here //
  return (
    <div className={style.feature__container}>
      <div className="heading">
        <h2>Featured Product</h2>
      </div>
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          350: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          660: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 80,
          },
          990: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1100: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
          1350: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1500: {
            slidesPerView: 4,
            spaceBetween: 80,
          },
        }}
        modules={[Pagination]}
        className="slider"
      >
        <SwiperSlide className={`${style.feature} myslide`}>
          <div className={style.image__wrapper}>
            <Image
              src={bottle1}
              quality={100}
              alt="banner"
              className={style.image}
            ></Image>
          </div>
          <h4>PALMOKIVER</h4>
          <p>$30</p>
          <Link href="/shop" className="button">
            Shop Now
          </Link>
        </SwiperSlide>
        <SwiperSlide className={`${style.feature} myslide`}>
          <div className={style.image__wrapper}>
            <Image
              src={bottle2}
              quality={100}
              alt="banner"
              className={style.image}
            ></Image>
          </div>
          <h4>FIBRE PACK</h4>
          <p>$30</p>
          <Link href="/shop" className="button">
            Shop Now
          </Link>
        </SwiperSlide>
        <SwiperSlide className={`${style.feature} myslide`}>
          <div className={style.image__wrapper}>
            <Image
              src={bottle3}
              quality={100}
              alt="banner"
              className={style.image}
            ></Image>
          </div>
          <h4>SHAMPOO</h4>
          <p>$30</p>
          <Link href="/shop" className="button">
            Shop Now
          </Link>
        </SwiperSlide>
        <SwiperSlide className={`${style.feature} myslide`}>
          <div className={style.image__wrapper}>
            <Image
              src={bottle4}
              quality={100}
              alt="banner"
              className={style.image}
            ></Image>
          </div>
          <h4>HAIR CREAM</h4>
          <p>$30</p>
          <Link href="/shop" className="button">
            Shop Now
          </Link>
        </SwiperSlide>
        <SwiperSlide className={`${style.feature} myslide`}>
          <div className={style.image__wrapper}>
            <Image
              src={bottle1}
              quality={100}
              alt="banner"
              className={style.image}
            ></Image>
          </div>
          <h4>PALMOLIVER</h4>
          <p>$30</p>
          <Link href="/shop" className="button">
            Shop Now
          </Link>
        </SwiperSlide>
        <SwiperSlide className={`${style.feature} myslide`}>
          <div className={style.image__wrapper}>
            <Image
              src={bottle2}
              quality={100}
              alt="banner"
              className={style.image}
            ></Image>
          </div>
          <h4>FIBRE PACK</h4>
          <p>$30</p>
          <Link href="/shop" className="button">
            Shop Now
          </Link>
        </SwiperSlide>
        <SwiperSlide className={`${style.feature} myslide`}>
          <div className={style.image__wrapper}>
            <Image
              src={bottle3}
              quality={100}
              alt="banner"
              className={style.image}
            ></Image>
          </div>
          <h4>SHAMPOO</h4>
          <p>$30</p>
          <Link href="/shop" className="button">
            Shop Now
          </Link>
        </SwiperSlide>
        <SwiperSlide className={`${style.feature} myslide`}>
          <div className={style.image__wrapper}>
            <Image
              src={bottle4}
              quality={100}
              alt="banner"
              className={style.image}
            ></Image>
          </div>
          <h4>HAIR CREAM</h4>
          <p>$30</p>
          <Link href="/shop" className="button">
            Shop Now
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Features;
