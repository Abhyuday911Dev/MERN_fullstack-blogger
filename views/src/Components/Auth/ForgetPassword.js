import React from "react";
import { getresetlink } from "../../store/userActions";

const ForgetPassword = () => {

  const submitHandler = async (e) => {
    e.preventDefault();
    // alert(e.target[0].value);
    getresetlink({email: e.target[0].value})
    // dispatch(
    //   await asyncsignin({
    //     email: e.target[0].value,
    //     password: e.target[1].value,
    //   })
    // );
    // setError(user.error);
    // setFlg(1);
  };

  return (
    <div id="forgetparent">
      <form
        className="form"
        id="forget-form"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <h3 className="">Get Reset Link:</h3>
        <input
        id="reset-email"
          className="form__input"
          type="email"
          name="Email"
          placeholder="Email"
          required
        />
        <button
          type="submit"
          id="send-link"
          
        >
          SEND LINK
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
