import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { asyncsignout } from "../../store/userActions";
import Editor from "./Editor";
import Profiledets from "./Profiledets";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const signoutUser = () => {
    dispatch(asyncsignout());
  };

  return (
    <div id="profile">
      <Profiledets name={user.user.name} />
      <Outlet />
      <button className="profile-btn" onClick={signoutUser}>
        Signout
      </button>
      <Editor />
    </div>
  );
};

export default Profile;
