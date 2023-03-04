import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { asyncsignout } from "../../store/userActions";
import LazyImage from "./LazyImage";

const Profiledets = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const setStoriesBtn =
    location.pathname === "/myblogs" ? (
      <button className="profile-btn n-signout" onClick={() => navigate("/")}>
        Show Homepage
      </button>
    ) : (
      <button
        className="profile-btn n-signout"
        onClick={() => navigate("/myblogs")}
      >
        Show my stories
      </button>
    );

  const setSavedBtn =
    location.pathname === "/mysavedblogs" ? (
      <button className="profile-btn n-signout" onClick={() => navigate("/")}>
        Show Homepage
      </button>
    ) : (
      <button
        className="profile-btn n-signout"
        onClick={() => navigate("/mysavedblogs")}
      >
        Show my saved list
      </button>
    );

  const signoutUser = () => {
    dispatch(asyncsignout());
  };

  const editor = () => {
    location.pathname === "/" ? (
      toast.info('Niche hai dhyan se dekh! ', {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        })
    ) : (
      navigate("/")
    );
  };

  return (
    <>
      <div id="profiledets">
        <LazyImage
          src={`https://api.dicebear.com/5.x/identicon/svg?seed=${props.name}`}
          alt=""
        />
        <div id="profiledetsright">
          <h1>
            <b className="darkyellow">Welcome!</b>&nbsp;
            <small className="upper">{props.name}</small>
          </h1>
          <div className="d-flex pbelow">
            {setStoriesBtn}
            <button className="profile-btn signout-btn " onClick={editor}>
              Editor
            </button>
          </div>
          <div className="d-flex pbelow">
            {setSavedBtn}
            <button className="profile-btn  signout-btn" onClick={signoutUser}>
              Signout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profiledets;
