import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncdeleteblog, asyncloadmyblogs } from "../../store/userActions";

const Myblogs = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(asyncloadmyblogs());
  }, [dispatch]);

  const deleteHandler = async (e) => {
    alert(e)
    dispatch(asyncdeleteblog(e));
    dispatch(asyncloadmyblogs());
  };


  return (
    <>
      <div id="profileblog">
        <h2>Your Stories</h2>
        {user &&
          user.blogs &&
          user.blogs.map((blog) => (
            <div key={blog._id} id="profile-card-parent">
              <div
                id="profile-card"
                dangerouslySetInnerHTML={{ __html: blog.data }}
              ></div>
              <section><i
                  onClick={(e) => {
                    deleteHandler(blog._id);
                  }}
                  key={blog._id}
                  className="ri-delete-bin-6-line"
                ></i></section>
            </div>
          ))}
      </div>
    </>
  );
};

export default Myblogs;
