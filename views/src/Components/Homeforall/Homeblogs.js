import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { asyncloadblogs, asyncloaduser } from "../../store/userActions";

const Homeblogs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const user = useSelector((state) => state.user);

  // console.log(user);

  useEffect(() => {
    dispatch(asyncloadblogs());
    dispatch(asyncloaduser());
  }, [dispatch]);

  const homeclickHandler = (params) => {
    toast.info('Signup to save blogs! ', {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      })
    navigate("/signup")
  }

  return (
    <>
      <div id="profileblog">
        <h2>Trending Stories</h2>
        {user &&
          user.blogs &&
          user.blogs.map((blog) => (
            <div key={blog._id} id="profile-card-parent">
              <div
                id="profile-card"
                dangerouslySetInnerHTML={{ __html: blog.data }}
              ></div>
              <section>
                <i key={blog._id} onClick={homeclickHandler} className="ri-bookmark-line"></i>
              </section>
            </div>
          ))}
      </div>
    </>
  );
};

export default Homeblogs;
