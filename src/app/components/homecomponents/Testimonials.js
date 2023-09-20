"use client";

import React, { useEffect } from "react";
import style from "../../styles/testimonials.module.css";
import { RiStarSFill } from "react-icons/ri";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  // animation starts here //
  useEffect(() => {
    gsap.from(".reviews", {
      y: 400,
      opacity: 0,
      duration: 1,
      ease: "circ.out",
      scrollTrigger: {
        trigger: "#to_trigger",
        start: "bottom 70%",
        toggleActions: "restart none none reset",
      },
    });
  }, []);
  // animation ends here //
  return (
    <div className={style.testimonials__container}>
      <div className="heading">
        <h2 id="to_trigger">Testimonials</h2>
      </div>
      <div className={style.testimonials__wrapper}>
        <div className={`${style.testimonial} reviews`}>
          <p>
            &quot;After having gastric sleeve surgery I had a lot of thinning
            around the perimeter of my hair and this product worked great
            because it built it all up so it didn&apos;t look like I had lost
            any hair.&quot;
          </p>
          <h6>Adif Khan</h6>
          <div className={style.stars}>
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </div>
        </div>
        <div className={`${style.testimonial} reviews`}>
          <p>
            &quot;I have really thin hair and I have to wear hair extensions and
            it&apos;s so hard to cover them. This hair duster helps to conceal
            my hair extensions so well.&quot;
          </p>
          <h6>Maynul Islam</h6>
          <div className={style.stars}>
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </div>
        </div>
        <div className={`${style.testimonial} reviews`}>
          <p>
            &quot;I use this hair duster to cover up my greys, I even use it on
            my husband&apos;s hair too to cover up his thinning hair.&quot;
          </p>
          <h6>Joy Patowary</h6>
          <div className={style.stars}>
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
