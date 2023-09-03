import React from "react";
import style from "@/styles/about.module.css";
import Image from "next/image";
import modelImg from "@/assets/model.png";

const About = () => {
  return (
    <div className={style.about}>
      <div className={style.about__content}>
        <div className="heading">
          <h2>about us</h2>
        </div>
        <p>
          HAIRYTAIL hair fibre is simple to use with amazing results achieved in
          30 seconds. This safe formula is made with natural ingredients that do
          not stimulate the scalp or cause irritation. It will not clog pores
          and will shampoo out easily. Available in a large range of colours to
          match your own hair, it is suitable for all day wear with no flaking.
          It is water and wind resistant so you can be confident your style will
          last all day with the use of the HAIRYTAL fixing spray. It is Vegan
          friendly and not tested on animals.
        </p>
        <button className="button">shop now</button>
      </div>
      <div>
        <div className={style.about__img}>
          <Image
            src={modelImg}
            alt="model"
            quality={100}
            className={style.image}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default About;
