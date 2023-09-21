"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/shared/Header";
import TopHeader from "./components/shared/TopHeader";
import Footer from "./components/shared/Footer";
import { UserContext } from "../helpers/UserContext";
import { useEffect, useState } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HairyTail",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const getauth = async () => {
      const res = await axios.get("/api/users/auth");
      if (res.data.success) {
        setCurrentUser(res.data.user);
      }
    };
    getauth();
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
          <TopHeader />
          <Header />
          {children}
          <Footer />
        </UserContext.Provider>
      </body>
    </html>
  );
}
