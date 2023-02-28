import React from "react";
import { useSelector } from "react-redux";
// import { asyncloadblogs, asyncloaduser } from "../../store/userActions";

const Profileblogs = () => {
  // const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  // useEffect(() => {
  //   dispatch(asyncloadblogs());
  //   dispatch(asyncloaduser());
  // }, [dispatch]);

  return (
    <>
    <h2>Trending blogs</h2>
      <div id="profileblog">
        {user &&
          user.blogs &&
          user.blogs.map((blog) => (
            <div
              id="profile-card"
              key={blog._id}
              dangerouslySetInnerHTML={{ __html: blog.data }}
            ></div>
          ))}
      </div>
    </>
  );
};

export default Profileblogs;
