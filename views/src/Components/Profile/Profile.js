import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import Editor from "./Editor";
import Profiledets from "./Profiledets";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const location = useLocation();

  return (
    <div id="profile">
      <Profiledets name={user.user.name} />
      <div className="d-flex">
        <Outlet />
        {location.pathname === "/" ? (
          <Editor />
        ) : (
          console.log("no editor for you")
        )}
      </div>
    </div>
  );
};

export default Profile;
