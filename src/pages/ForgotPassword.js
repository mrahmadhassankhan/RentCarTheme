import React from "react";
import { Link } from "react-router-dom";
export const ForgotPassword = () => {
  return (
    <div>
      {" "}
      <section class="container forms">
        <div class="form signup">
          <div class="form-content">
            <header>Forgot Password</header>
            <form action="#">
              <div class="field input-field">
                <input type="email" placeholder="Email" class="input" />
              </div>

              <div class="field button-field">
                <button>Submit</button>
              </div>
            </form>

            <div class="form-link">
              <span>
                Back to Login-{" "}
                <Link to="/login" class="link login-link">
                  Login
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
