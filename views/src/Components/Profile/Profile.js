import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { asyncsignout } from "../../store/userActions";
import Editor from "./Editor";
import Profiledets from "./Profiledets";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state) => state.user);
  // console.log(user.user);

  const signoutUser = () => {
    dispatch(asyncsignout());
  };

  return (
    <div id="profile">
      <Profiledets name={user.user.name}/>
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
