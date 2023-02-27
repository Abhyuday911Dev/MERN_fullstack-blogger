import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncsignin } from "../../store/userActions";
import { toast } from "react-toastify";
import "../../Style/Auth.css";

const Signin = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(
      await asyncsignin({
        email: e.target[0].value,
        password: e.target[1].value,
      })
    );

    user.error
    ? toast.error(user.error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    : console.log("signup");
  };

  console.log("signup", user);
  user.error
    ? toast.error(user.error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    : console.log("signup");
  console.log("ye bad me hua");
  user.isAuthenticated
    ? navigate("/")
    : console.log("some thing wrong in signup");

  return (
    <>
      <div className="mainauthcont">
        <div id="formparent">
          <form
            class="form"
            id="b-form"
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <h2 class="form_title title lh">Sign in to Website</h2>
            <div class="form__icons">
              <i class="ri-facebook-fill"></i>
              <i class="ri-linkedin-fill"></i>
              <i class="ri-twitter-fill"></i>
            </div>
            <span class="form__span">
              Don't have an Account{" "}
              <Link className="thicklink" to="/signup">
                Sign up
              </Link>
            </span>
            <input
              class="form__input"
              type="email"
              name="Email"
              placeholder="Email"
              required
            />
            <input
              class="form__input"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <Link class="form__link thicklink">Forgot your password?</Link>
            <button
              id="button_h"
              type="submit"
              class="form__button button submit signinbtn"
            >
              SIGN IN
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
