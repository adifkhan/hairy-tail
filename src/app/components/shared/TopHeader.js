"use client";

import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import style from "../../styles/header.module.css";
import {
  RiAccountCircleLine,
  RiHeartLine,
  RiLoginCircleLine,
} from "react-icons/ri";
import { useRouter } from "next/navigation";
import axios from "axios";
import { UserContext } from "../../../helpers/UserContext";

const TopHeader = () => {
  const router = useRouter();
  const { currentUser, setCurrentUser } = useContext(UserContext);

  /*
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
  */

  const handleLogOut = async () => {
    try {
      await axios.get("/api/users/logout");
      setCurrentUser({});
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
        {currentUser?.email ? (
          <button className={style.link} onClick={handleLogOut}>
            <RiLoginCircleLine />
            <p>LOGOUT</p>
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
