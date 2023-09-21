"use client";

import React, { useState } from "react";
import styles from "../styles/register.module.css";
import axios from "axios";
import Link from "next/link";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/users/forgotpassword", { email });
      setMessage(response.data.message);
    } catch (error: any) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className={styles.register_container}>
      <div className={styles.bg_image}></div>
      <div className={styles.register_wrapper}>
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.input_group}>
            <input
              type="text"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="">Email</label>
          </div>
          <p className="errormessage">{message}</p>
          <div>
            <input
              type="submit"
              value={loading ? "Sending..." : "Send Mail"}
              className={styles.submit_btn}
            />
          </div>
        </form>
        <Link href="/login" className={styles.link}>
          Back to Login
        </Link>
      </div>
    </section>
  );
};

export default ForgotPassword;
