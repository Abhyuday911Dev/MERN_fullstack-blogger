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
import Signup from "./Components/Auth/Signup";
import Profile from "./Components/Profile/Profile";
import Signin from "./Components/Auth/Signin";
import Profileblogs from "./Components/Profile/Profileblogs";
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
  // console.log("app", user);

  // const loginUser = () => {
  //   dispatch(
  //     asyncsignin({
  //       email: "ravi@kumar.com",
  //       password: "Aa@123",
  //     })
  //   );
  // };

  // if (user.isAuthenticated && location.pathname === "/") {
  //   console.log("hai");
  //   navigate("/profile");
  // }

  return (
    <div id="main">
      <div id="slide1" className="slide">
        <Routes>
          <Route path="/" element={user.isAuthenticated ?<Profile />:<Homepagecommon />}>
            <Route path="/" element={<Profileblogs />}></Route>
          </Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </div>
    </div>

    // <div>
    //   <button onClick={notify}>Call Toast</button>
    //   <button onClick={loginUser}>Signin</button>
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
