"use client";

import React, { useState } from "react";
import styles from "@/styles/register.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

const Register = () => {
  const router = useRouter();
  const [confirmPass, setConfirmPass] = useState("");
  const [terms, setTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const onSignUp = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      router.push("/login");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className={styles.register_container}>
      <div className={styles.bg_image}></div>
      <div className={styles.register_wrapper}>
        <h2>Register</h2>
        <form>
          <div className={styles.input_group}>
            <input
              type="text"
              required
              onChange={(e) => setUser({ ...user, userName: e.target.value })}
            />
            <label htmlFor="">Name</label>
          </div>
          <div className={styles.input_group}>
            <input
              type="text"
              required
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <label htmlFor="">Email</label>
          </div>
          <div className={styles.input_group}>
            <input
              type="password"
              required
              autoComplete="user-password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <label htmlFor="">Password</label>
          </div>
          <div className={styles.input_group}>
            <input
              type="password"
              required
              autoComplete="user-password"
              onChange={(e) => setConfirmPass(e.target.value)}
            />
            <label htmlFor="">Confirm Password</label>
          </div>
          <div className={styles.term_condition}>
            <input
              type="checkbox"
              name="terms"
              id="terms"
              onClick={() => setTerms(!terms)}
            />
            <label htmlFor="terms">agree to terms and conditions</label>
          </div>
          <div>
            <input
              type="submit"
              value={loading ? "Registering..." : "Register"}
              className={styles.submit_btn}
              disabled={
                terms === false ||
                user.password !== confirmPass ||
                confirmPass === ""
              }
            />
          </div>
        </form>
        <p className="errormessage">{error}</p>
        <p>
          Already have an account? let&apos;s{" "}
          <Link href="/login" className={styles.link}>
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
