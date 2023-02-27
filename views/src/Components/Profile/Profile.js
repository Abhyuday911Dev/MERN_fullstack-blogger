import React from "react";
import { useDispatch } from "react-redux";
import { asyncsignout } from "../../store/userActions";

const Profile = () => {
  const dispatch = useDispatch();

  const signoutUser = () => {
    dispatch(asyncsignout());
  };

  return (
    <div id="delete">
      <h1>Profile</h1>
      <button onClick={signoutUser}>Signout</button>
    </div>
  );
};

export default Profile;
