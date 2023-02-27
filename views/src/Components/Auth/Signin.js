import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <>
    <div className="mainauthcont">
        <div id="formparent">
        <form class="form" id="b-form" method="post" action="/login">
          <h2 class="form_title title lh">Sign in to Website</h2>
          <div class="form__icons">
            <i class="ri-facebook-fill"></i>
            <i class="ri-linkedin-fill"></i>
            <i class="ri-twitter-fill"></i>
          </div><span class="form__span">Don't have an Account <Link className='thicklink' to="/signup">Sign up</Link></span>
          <input class="form__input" type="text" name="username" placeholder="username" required/>
          <input class="form__input" type="password" name="password" placeholder="Password" required/><Link class="form__link">Forgot your password?</Link>
          <button id="button_h" type="submit" class="form__button button submit">SIGN IN</button>
        </form>
        </div>
      </div>
    </>
  )
}

export default Signin