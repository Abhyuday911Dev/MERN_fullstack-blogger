import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LazyImage from "./LazyImage";

const Profiledets = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

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

  const setSavedBtn =
    location.pathname === "/mysavedblogs" ? (
      <button className="profile-btn" onClick={() => navigate("/")}>
        Show Homepage
      </button>
    ) : (
      <button className="profile-btn" onClick={() => navigate("/mysavedblogs")}>
        Show my saved list
      </button>
    );
  return (
    <div id="profiledets">
      {/* <img
        src={`https://api.dicebear.com/5.x/identicon/svg?seed=${props.name}`}
        alt=""
        id="profileimg"
      /> */}
      <LazyImage
        src={`https://api.dicebear.com/5.x/identicon/svg?seed=${props.name}`}
        alt=""
      />
      <div id="profiledetsright">
        <h1>
          {" "}
          <b className="darkyellow">Welcome!</b>{" "}
          <small className="upper">{props.name}</small>{" "}
        </h1>
        {setStoriesBtn}
        {setSavedBtn}
      </div>
    </div>
  );
};

export default Profiledets;
