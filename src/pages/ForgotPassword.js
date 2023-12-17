import React from "react";
import styles from "../pages/LoginReg.module.css";
import { Link } from "react-router-dom";
export const ForgotPassword = () => {
  return (
    <>
      <section className={styles["container"]}>
        <div className={styles["form "]}>
          <div className={styles["form-content"]}>
            <header>Forgot Password</header>
            <form action="#">
              <div className={styles["field input-field"]}>
                <input
                  type="email"
                  placeholder="Email"
                  className={styles["input"]}
                />
              </div>

              <div className={styles["field button-field"]}>
                <button>Submit</button>
              </div>
            </form>

            <div className={styles["form-link"]}>
              <span>
                Back to Login-{" "}
                <Link to="/login" className={styles["link login-link"]}>
                  Login
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
