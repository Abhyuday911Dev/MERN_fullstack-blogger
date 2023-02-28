import React, { useEffect } from "react";
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

    // user.error
    //   ? toast.error(user.error, {
    //       position: "top-right",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,   
    //       progress: undefined,
    //       theme: "dark",
    //     })
    //   : console.log("signup");
  };

//   console.log("signup", user);
  // user.error
  //   ? toast.error(user.error, {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "dark",
  //     })
  //   : console.log("signup");
  // console.log("ye bad me hua");
  useEffect(() => {
    if (user.isAuthenticated) {
      navigate("/");
    }
  }, [user.isAuthenticated, navigate]);

  useEffect(() => {
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
  }, [user.error]);

  return (
    <>
      <div className="mainauthcont">
        <div id="formparent">
          <form
            className="form"
            id="b-form"
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <h2 className="form_title title lh">Sign in to Website</h2>
            <div className="form__icons">
              <i className="ri-facebook-fill"></i>
              <i className="ri-linkedin-fill"></i>
              <i className="ri-twitter-fill"></i>
            </div>
            <span className="form__span">
              Don't have an Account{" "}
              <Link className="thicklink" to="/signup">
                Sign up
              </Link>
            </span>
            <input
              className="form__input"
              type="email"
              name="Email"
              placeholder="Email"
              required
            />
            <input
              className="form__input"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <Link className="form__link thicklink">Forgot your password?</Link>
            <button
              id="button_h"
              type="submit"
              className="form__button button submit signinbtn"
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
