import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { asyncsignout } from "../../store/userActions";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user.user);

  const signoutUser = () => {
    dispatch(asyncsignout());
  };

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
          <button className="profile-btn">Show my blogs</button>
          <button className="profile-btn">Show saved blogs</button>
        </div>
      </div>
      <Outlet />
      <h4>{JSON.stringify(user.user)}</h4>
      <button className="profile-btn" onClick={signoutUser}>Signout</button>
    </div>
  );
};

export default Profile;
