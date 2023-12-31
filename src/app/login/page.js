"use client";

import React, { useContext, useState } from "react";
import styles from "../styles/register.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { UserContext } from "../../helpers/UserContext";

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { setCurrentUser } = useContext(UserContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      setCurrentUser({ email: user.email });
      router.push("/");
    } catch (error) {
      const message = JSON.parse(error.request.response);
      setError(message?.message || error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className={styles.register_container}>
      <div className={styles.bg_image}></div>
      <div className={styles.register_wrapper}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
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
          <p className="errormessage">{error}</p>
          <div>
            <input
              type="submit"
              value={loading ? "Logging in..." : "Login"}
              className={styles.submit_btn}
            />
          </div>
        </form>
        <Link href="/forgotpassword" className={styles.link}>
          Forgot Password?
        </Link>
        <div className={styles.toggle_btn}>
          <Link href="/register">
            <button>Register Instead</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
