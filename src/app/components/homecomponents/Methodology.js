import React, { useEffect } from "react";
import style from "@/styles/methodology.module.css";
import Image from "next/image";
import icon1 from "@/assets/icons/icon1.png";
import icon2 from "@/assets/icons/icon2.png";
import icon3 from "@/assets/icons/icon3.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Methodology = () => {
  // animation starts here //
  useEffect(() => {
    gsap.from(".method", {
      x: 300,
      opacity: 0,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".method",
        start: "top 80%",
        toggleActions: "restart none none reset",
        markers: true,
      },
    });
  }, []);
  // animation ends here //
  return (
    <div className={style.methodology__container}>
      <dir className="heading">
        <h2 className="slide_trigger">How It Works</h2>
      </dir>
      <div className={style.methodology__wrapper}>
        <div className={`${style.methodology} method`}>
          <div className={style.icon__box}>
            <Image
              src={icon1}
              quality={100}
              alt="icon"
              className={style.icon}
            ></Image>
            <span>1</span>
          </div>
          <h4>HairyTails Hair Fibres</h4>
          <p>
            Wash dry and style your hair without the use of styling products.
            Hold the 1000HAIRS applicator at a 45° angle 7-15cm from the hair
            and gently shake to achieve desired result.
          </p>
        </div>
        <div className={`${style.methodology} method`}>
          <div className={style.icon__box}>
            <Image
              src={icon2}
              quality={100}
              alt="icon"
              className={style.icon}
            ></Image>
            <span>2</span>
          </div>
          <h4>HairyTails Perfecting Tools</h4>
          <p>
            Once desired coverage is achieved, gently pat the hair to help the
            fibre absorb more closely.
          </p>
        </div>
        <div className={`${style.methodology} method`}>
          <div className={style.icon__box}>
            <Image
              src={icon3}
              quality={100}
              alt="icon"
              className={style.icon}
            ></Image>
            <span>3</span>
          </div>
          <h4>HairyTail Fibrehold Spray</h4>
          <p>
            For best results, use in conjunction with our 1000hairs fibre hold
            spray.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Methodology;
