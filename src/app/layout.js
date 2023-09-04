import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/shared/Header";
import TopHeader from "./components/shared/TopHeader";
import Footer from "./components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HairyTail",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopHeader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
