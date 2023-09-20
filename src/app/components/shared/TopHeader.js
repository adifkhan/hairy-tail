"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import style from "../../styles/header.module.css";
import {
  RiAccountCircleLine,
  RiHeartLine,
  RiLoginCircleLine,
} from "react-icons/ri";
import { useRouter } from "next/navigation";
import axios from "axios";

const TopHeader = () => {
  const router = useRouter();
  const [user, setUser] = useState({});

  useEffect(() => {
    const getauth = async () => {
      const res = await axios.get("/api/users/auth");
      if (res.data.success) {
        setUser(res.data.user);
      }
    };
    getauth();
  }, []);
  const handleLogOut = async () => {
    try {
      await axios.get("/api/users/logout");
      setUser({});
      router.push("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

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
        {user?.email ? (
          <button className={style.link} onClick={handleLogOut}>
            <RiLoginCircleLine />
            <p>LOG OUT</p>
          </button>
        ) : (
          <Link href="/login" className={style.link}>
            <RiLoginCircleLine />
            <p>LOGIN</p>
          </Link>
        )}
      </div>
    </section>
  );
};

export default TopHeader;
