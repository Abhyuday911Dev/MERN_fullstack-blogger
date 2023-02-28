import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { asyncsignout } from "../../store/userActions";
import Editor from "./Editor";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state) => state.user);
  // console.log(user.user);

  const signoutUser = () => {
    dispatch(asyncsignout());
  };

  const setStoriesBtn =
    location.pathname === "/myblogs" ? (
      <button className="profile-btn" onClick={() => navigate("/")}>
        Show Homepage
      </button>
    ) : (
      <button className="profile-btn" onClick={() => navigate("/myblogs")}>
        Show my stories
      </button>
    );

  return (
    <div id="profile">
      <div id="profiledets">
        <img
          src={`https://api.dicebear.com/5.x/identicon/svg?seed=${user.user.name}`}
          alt=""
          id="profileimg"
        />
        <div id="profiledetsright">
          <h1>
            {" "}
            <b className="darkyellow">Welcome!</b>{" "}
            <small className="upper">{user.user.name}</small>{" "}
          </h1>
          {setStoriesBtn}
          <button className="profile-btn">Show saved blogs</button>
        </div>
      </div>
      <Outlet />
      <button className="profile-btn" onClick={signoutUser}>
        Signout
      </button>
      {/* ___________________________________________________________ */}

      <Editor />
    </div>
  );
};

export default Profile;
