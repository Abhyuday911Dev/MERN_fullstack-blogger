import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadblogs, asyncloaduser } from "../../store/userActions";

const Homeblogs = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  // console.log(user);

  useEffect(() => {
    dispatch(asyncloadblogs());
    dispatch(asyncloaduser());
  }, [dispatch]);

  return (
    <>
      <div id="homeblog">
        {user &&
          user.blogs &&
          user.blogs.map((blog) => (
            <div
              id="home-card"
              key={blog._id}
              dangerouslySetInnerHTML={{ __html: blog.data }}
            ></div>
          ))}
      </div>
    </>
  );
};

export default Homeblogs;
