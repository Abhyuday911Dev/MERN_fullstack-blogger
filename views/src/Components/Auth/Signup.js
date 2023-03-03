import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncsignup } from "../../store/userActions";
import { toast } from "react-toastify";
import "../../Style/Auth.css";

const Signup = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [error, setError] = useState(user.error);
  const [flag, setFlag] = useState(0);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(
      await asyncsignup({
        name: e.target[0].value,
        username: e.target[2].value,
        email: e.target[1].value,
        password: e.target[3].value,
      })
    );
    setError(user.error);
    setFlag(1);
  };

  // problem ___________________________________________________
  // Cannot update a component (`BrowserRouter`) while rendering a different component (`Signin`). To locate the bad setState() call inside `Signin`, and its fix

  useEffect(() => {
    if (user.isAuthenticated) {
      navigate("/");
    }
  }, [user.isAuthenticated, navigate]);

  // user.isAuthenticated
  //   ? navigate("/")
  //   : console.log("some thing wrong in signup");

  // problem ___________________________________________________ fixed using God gpt

  useEffect(() => {
    if (user.isAuthenticated) {
      navigate("/");
    } else if (flag) {
      toast.error(user.error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }, [user.error, flag, navigate, user.isAuthenticated]);

  return (
    <>
      <div className="mainauthcont">
        <div id="formparent">
          <div className="crossauth" onClick={() => navigate("/")}>
            <i className="ri-add-fill"></i>
          </div>
          <form
            className="form"
            id="a-form"
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <h2 className="form_title title lh">Create Account</h2>
            <div className="form__icons">
              <i className="ri-facebook-fill"></i>
              <i className="ri-linkedin-fill"></i>
              <i className="ri-twitter-fill"></i>
            </div>
            <span className="form__span">
              Already have an Account{" "}
              <Link className="thicklink" to="/signin">
                Sign In
              </Link>
            </span>
            <input
              className="form__input"
              name="name"
              type="text"
              placeholder="Name"
              required
            />
            <input
              className="form__input"
              name="email"
              type="text"
              placeholder="Email"
              required
            />
            <input
              className="form__input"
              name="username"
              type="text"
              placeholder="username"
              required
            />
            <input
              className="form__input"
              name="password"
              type="password"
              placeholder="Password"
              required
            />
            <button
              id="button_h"
              type="submit"
              className="form__button button submit"
              key={error}
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
