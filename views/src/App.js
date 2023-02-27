import React, { useEffect } from "react";
import "./Style/App.css";
// import { toast } from "react-toastify";
import {
  // asyncsignup,
  // asyncloaduser,
  // asyncsignin,
  // asyncsignout,
  asyncloadblogs,
} from "./store/userActions";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Homepagecommon from "./Components/Homeforall/Homepagecommon";
import Signin from "./Components/Auth/Signin";
// import Editor from "./Components/Editor";

const App = () => {
  // const notify = () => toast("Wow so easy!");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  // console.log(error);
  // console.log(isAuthenticated);
  useEffect(() => {
    // dispatch(asyncloaduser());
    dispatch(asyncloadblogs());
  }, [dispatch]);
  console.log(user);
  // const registerUser = () => {
  //   dispatch(
  //     asyncsignup({
  //       name: "Ravi Kumar don1",
  //       username: "ravi_kumar don1",
  //       email: "ravi@kumardon1.com",
  //       password: "Aa@123",
  //     })
  //   );
  // };

  // const loginUser = () => {
  //   dispatch(
  //     asyncsignin({
  //       email: "ravi@kumar.com",
  //       password: "Aa@123",
  //     })
  //   );
  // };

  // const signoutUser = () => {
  //   dispatch(asyncsignout());
  // };

  return (
    <div id="main">
      <div id="slide1" className="slide">
        <Routes>
          <Route path="/" element={<Homepagecommon />}></Route>
          <Route path="/signup" ></Route>
          <Route path="/signin" element={<Signin />}></Route>
        </Routes>
      </div>
    </div>


    // <div>
    //   <button onClick={notify}>Call Toast</button>
    //   <button onClick={registerUser}>Signup</button>
    //   <button onClick={loginUser}>Signin</button>
    //   <button onClick={signoutUser}>Signout</button>"font-size: 22px;"
    //   <hr />
    //   <Editor />
    //   <hr />
    //   {user &&
    //     user.blogs &&
    //     user.blogs.map((blog) => (
    //       <div
    //         key={blog._id}
    //         dangerouslySetInnerHTML={{ __html: blog.data }}
    //       ></div>
    //     ))}
    // </div>
  );
};

export default App;
