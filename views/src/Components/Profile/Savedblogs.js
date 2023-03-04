import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncloadmysavedblogs,
  asyncsaveunsaveblog,
} from "../../store/userActions";

const Savedblogs = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  console.log("user saved", user);
  useEffect(() => {
    dispatch(asyncloadmysavedblogs());
  }, [dispatch]);

  const saveHandler = async (e) => {
    await dispatch(asyncsaveunsaveblog(e));
    dispatch(asyncloadmysavedblogs());
  };

  return (
    <>
      <div id="profileblog">
        <h2>Saved blogs</h2>
        {user &&
          user.blogs &&
          user.blogs.map((blog) => (
            <div key={blog._id} id="profile-card-parent">
              <div
                id="profile-card"
                dangerouslySetInnerHTML={{ __html: blog.data }}
              ></div>
              <section>
                <i
                  onClick={(e) => {
                    saveHandler(blog._id);
                  }}
                  key={blog._id}
                  className="ri-bookmark-fill"
                ></i>
              </section>
            </div>
          ))}
      </div>
    </>
  );
};

export default Savedblogs;
