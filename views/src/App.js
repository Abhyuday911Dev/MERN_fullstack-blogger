import React, { useEffect } from "react";
import "./Style/App.css";
import { asyncloadblogs, asyncloaduser } from "./store/userActions";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Homepagecommon from "./Components/Homeforall/Homepagecommon";
import Signup from "./Components/Auth/Signup";
import Profile from "./Components/Profile/Profile";
import Signin from "./Components/Auth/Signin";
import Profileblogs from "./Components/Profile/Profileblogs";
import Myblogs from "./Components/Profile/Myblogs";
import Savedblogs from "./Components/Profile/Savedblogs";
import ForgetPassword from "./Components/Auth/ForgetPassword";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(asyncloaduser());
    dispatch(asyncloadblogs());
  }, [dispatch]);

  return (
    <div id="main">
      <div id="slide1" className="slide">
        <Routes>
          <Route
            path="/"
            element={user.isAuthenticated ? <Profile /> : <Homepagecommon />}
          >
            <Route path="/" element={<Profileblogs />}></Route>
            <Route path="/myblogs" element={<Myblogs />}></Route>
            <Route path="/mysavedblogs" element={<Savedblogs />}></Route>
          </Route>
          <Route path="/signin" element={<Signin />}>
            <Route
              path="/signin/forget-password"
              element={<ForgetPassword />}
            ></Route>
          </Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
