import React from 'react'
import "../../Style/Auth.css"

const Signin = () => {

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value)
    }


  return (
    <>
    <div className="mainauthcont">
     <div id="formparent">
        <form className="form" id="a-form" onSubmit={(e) => {submitHandler(e)}}>
          <h2 className="form_title title lh">Create Account</h2>
          <div className="form__icons">
            <i className="ri-facebook-fill"></i>
            <i className="ri-linkedin-fill"></i>
            <i className="ri-twitter-fill"></i>
          </div><span className="form__span">or Enter your email address to Sign up FREE</span>
          <input className="form__input" name="name" type="text" placeholder="Name" required/>
          <input className="form__input" name="email" type="text" placeholder="Email" required/>
          <input className="form__input" name="username" type="text" placeholder="username" required/>
          <input className="form__input" name="password" type="password" placeholder="Password" required/>
          <button id="button_h" type="submit" className="form__button button submit">SIGN UP</button>
        </form>
      </div>
     </div>
    </>
  )
}

export default Signin