import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmyblogs } from "../../store/userActions";

const Myblogs = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(asyncloadmyblogs());
  }, [dispatch]);

  console.log(user);

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
              <section>ada</section>
            </div>
          ))}
      </div>
    </>
  );
};

export default Myblogs;
