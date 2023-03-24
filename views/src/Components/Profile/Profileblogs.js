import Pagination from "rc-pagination";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncloadblogs,
  asyncloaduser,
  asyncsaveunsaveblog,
} from "../../store/userActions";

import "rc-pagination/assets/index.css";

const Profileblogs = () => {
  const dispatch = useDispatch();
  const { user, blogs } = useSelector((state) => state.user);
  const [currentPage, setCurrentPage] = useState(1);

  const countPerPage = 3;
  const [collection, setCollection] = useState(blogs.slice(0, countPerPage));

  const updatePage = (p) => {
    setCurrentPage(p);
    const to = countPerPage * p;
    const from = to - countPerPage;
    setCollection(blogs.slice(from, to));
  };

  const saveHandler = async (e) => {
    await dispatch(asyncsaveunsaveblog(e));
    dispatch(asyncloaduser());
  };

  useEffect(() => {
    const loadBlogs = async () => {
      await dispatch(asyncloadblogs());
      await dispatch(asyncloaduser());
    };
    loadBlogs();
  }, [dispatch]);

  useEffect(() => {
    console.log("dddd",[...blogs].reverse());
    setCollection(blogs.slice(0, countPerPage));
  }, [blogs]);

  useEffect(() => {
    if (window.scrollY !== 0) {
      window.scrollTo(200, 200);
    }
  }, [collection]);

  const blogCards =
    user &&
    blogs &&
    collection.map((blog) => (
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
            className={
              user.lists.includes(blog._id)
                ? "ri-bookmark-fill"
                : "ri-bookmark-line"
            }
          ></i>
        </section>
      </div>
    )).reverse();

  return (
    <>
      <div id="profileblog">
        <h2>Trending blogs</h2>

        {blogCards}
        <div className="d-flex justify-content-center">
          <Pagination
            onChange={updatePage}
            total={blogs.length}
            current={currentPage}
            pageSize={countPerPage}
          />
        </div>
      </div>
    </>
  );
};

export default Profileblogs;
