import React from "react";
import styles from "../pages/LoginReg.module.css";
import { Link } from "react-router-dom";
export default function Register() {
  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["form "]}>
          <div className={styles["form-content"]}>
            <header>Signup</header>
            <form action="#">
              <div className={styles["input-field"]}>
                <input
                  type="email"
                  placeholder="Email"
                  className={styles["input"]}
                />
              </div>

              <div className={styles["input-field"]}>
                <input
                  type="password"
                  placeholder="Create password"
                  className={styles["password"]}
                />
              </div>

              <div className={styles["input-field"]}>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className={styles["password"]}
                />
              </div>
              <div className={styles["button-signup"]}>
                <button className={styles["btn-signup"]}>Signup</button>
              </div>
            </form>

            <div className={styles["form-link"]}>
              <span>
                Already have an account?{" "}
                <Link to="/login" className={styles["link login-link"]}>
                  Login
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
