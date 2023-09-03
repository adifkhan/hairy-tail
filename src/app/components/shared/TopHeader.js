"use client";

import React from "react";
import Link from "next/link";
import style from "@/styles/header.module.css";
import {
  RiAccountCircleLine,
  RiHeartLine,
  RiLoginCircleLine,
} from "react-icons/ri";

const TopHeader = () => {
  return (
    <section className={style.top__header}>
      <p>Spend $60 or more to receive free standard shipping</p>
      <div>
        <Link href="/" className={style.link}>
          <RiAccountCircleLine />
          <p>MY ACCOUNT</p>
        </Link>
        <Link href="/" className={style.link}>
          <RiHeartLine />
          <p>WISHLIST</p>
        </Link>
        <Link href="/" className={style.link}>
          <RiLoginCircleLine />
          <p>LOGIN</p>
        </Link>
      </div>
    </section>
  );
};

export default TopHeader;
