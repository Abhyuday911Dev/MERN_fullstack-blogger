import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadblogs, asyncloaduser, asyncsaveunsaveblog } from "../../store/userActions";

const Profileblogs = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(asyncloadblogs());
    // dispatch(asyncloaduser());
  }, [dispatch]);

  const saveHandler = async (e) => {
    // dispatch(asyncsaveunsaveblog("cock"))
    await dispatch(asyncsaveunsaveblog(e))
    dispatch(asyncloaduser());
  }
  console.log(user);

  return (
    <>
      <div id="profileblog">
        <h2>Trending blogs</h2>
        {user &&
          user.blogs &&
          user.blogs.map((blog) => (
            <div key={blog._id} id="profile-card-parent">
              <div
                id="profile-card"
                dangerouslySetInnerHTML={{ __html: blog.data }}
              ></div>
              {/* <section><i onClick={(e) => {saveHandler(blog._id)}} key={blog._id} className={`ri-bookmark-line`}></i></section> */}
              <section><i onClick={(e) => {saveHandler(blog._id)}} key={blog._id} className={user.user.lists.includes(blog._id) ? "ri-bookmark-fill" : "ri-bookmark-line"}></i></section>
            </div>
          ))}
      </div>
    </>
  );
};

export default Profileblogs;
