"use client";

import React, { useState } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import style from "@/styles/header.module.css";
import Link from "next/link";
import {
  RiCloseLine,
  RiMenuLine,
  RiSearchLine,
  RiShoppingCart2Line,
} from "react-icons/ri";

const Header = () => {
  const [toggleSearch, setToggelSearch] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <header className={style.header}>
      <div className={style.header__img}>
        <Image
          className={style.image}
          src={logo}
          sizes="100vw"
          quality={100}
          alt="logo"
        ></Image>
      </div>
      <div
        className={
          menuToggle ? `${style.disabled__menu}` : `${style.active__menu}`
        }
        onClick={() => setMenuToggle(!menuToggle)}
      >
        <RiMenuLine />
      </div>
      <div
        className={
          menuToggle ? `${style.active__menu}` : `${style.disabled__menu}`
        }
        onClick={() => setMenuToggle(!menuToggle)}
      >
        <RiCloseLine />
      </div>
      <nav
        className={
          toggleSearch ? `${style.disabled__navbar}` : `${style.navbar}`
        }
      >
        <div className={style.links}>
          <Link href="/" className="nav_item">
            Home
          </Link>
          <Link href="/" className="nav_item">
            About
          </Link>
          <Link href="/" className="nav_item">
            Shop
          </Link>
          <Link href="/" className="nav_item">
            Salons
          </Link>
          <Link href="/" className="nav_item">
            FAQ
          </Link>
          <Link href="/" className="nav_item">
            Contact
          </Link>
        </div>
        <div className={style.cart}>
          <RiShoppingCart2Line />
          <span className={style.badge}>2</span>
        </div>
        <div
          className={style.search}
          onClick={() => setToggelSearch(!toggleSearch)}
        >
          <RiSearchLine />
        </div>
      </nav>
      <nav
        className={
          toggleSearch ? `${style.search__navbar}` : `${style.disabled__navbar}`
        }
      >
        <input type="text" name="search" placeholder="search..." />
        <div
          className={style.search}
          onClick={() => setToggelSearch(!toggleSearch)}
        >
          <RiSearchLine />
        </div>
      </nav>
      <nav
        className={
          menuToggle ? `${style.mini__menu}` : `${style.disabled__mini__menu}`
        }
      >
        <div className={style.menu__logo}>
          <Image
            className={style.image}
            src={logo}
            sizes="100vw"
            quality={100}
            alt="logo"
          ></Image>
        </div>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Shop</Link>
        <Link href="/">Salons</Link>
        <Link href="/">FAQ</Link>
        <Link href="/">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
