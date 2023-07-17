import { loaduser, errors, signout, loadblogs } from "./UserSlice";
import axios from "../axios";
import { toast } from "react-toastify";

export const asyncsignup = (newuser) => async (dispatch) => {
  try {
    // console.log(newuser);
    const { data } = await axios.post("/signup", newuser);
    dispatch(loaduser(data.user));
  } catch (err) {
    dispatch(errors(err.response.data.message));
  }
};

export const asyncsignin = (newuser) => async (dispatch) => {
  try {
    // console.log(newuser);
    const { data } = await axios.post("/signin", newuser);
    dispatch(loaduser(data.user));
  } catch (err) {
    dispatch(errors(err.response.data.message));
  }
};

export const asyncloaduser = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/loaduser");
    // console.log("loaduser action>>>>>", data);
    // console.log(data);
    dispatch(loaduser(data.user));
  } catch (err) {
    dispatch(errors(err.response.data.message));
  }
};

export const asyncsignout = () => async (dispatch) => {
  try {
    await axios.get("/signout");
    dispatch(signout());
  } catch (err) {
    dispatch(errors(err.response.data.message));
  }
};

export const getresetlink = async (e) => {
  // console.log(e.email);
  // try {
  //   const { data } = await axios.post("/send-mail", {
  //     email: e.email,
  //   });

  //   toast.success(data.message, {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "dark",
  //     });
  // } catch (err) {
  //   // console.log("catch",err.response.data)
  //   toast.error(err.response.data.message, {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "dark",
  //   });
  // }

  let pp = axios.post("/send-mail", {
    email: e.email,
  });
  
  toast.promise(
    pp,
    {
      pending: "Sending Email...",
      success: "Email sent!",
      error: "User not found!",
    },
    {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    }
  );
};

export const asyncloadblogs = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/blogs");
    // console.log("loaduser action>>>>>", data);
    // console.log(data);
    dispatch(loadblogs(data.blogs.reverse()));
  } catch (err) {
    dispatch(errors(err.response.data.message));
  }
};

//taking arguments to send get dynamic requet
export const asyncsaveunsaveblog = (e) => async (dispatch) => {
  try {
    await axios.get(`/list/${e}`);
    // const data = await axios.get(`/list/${e}`);
    // dispatch(loaduser(data.user));
    // console.log("loaduser action>>>>>", data.data.stories);
    // console.log(data);
    // dispatch(loadblogs(data.data.stories));
  } catch (err) {
    dispatch(errors(err.response.data.message));
  }
};

export const asyncdeleteblog = (e) => async (dispatch) => {
  try {
    console.log(`/deleteblog/${e}`);
    await axios.get(`/deleteblog/${e}`);
    // dispatch(asyncloadmyblogs());
    // const data = await axios.get(`/list/${e}`);
    // dispatch(loaduser(data.user));
    // console.log("loaduser action>>>>>", data.data.stories);
    // console.log(data);
    // dispatch(loadblogs(data.data.stories));
  } catch (err) {
    dispatch(errors(err.response.data.message));
  }
};



export const asyncloadmyblogs = () => async (dispatch) => {
  try {
    const data = await axios.get("/show-stories");
    console.log("loaduser action>>>>>", data.data.stories);
    // console.log(data);
    dispatch(loadblogs(data.data.stories));
  } catch (err) {
    dispatch(errors(err.response.data.message));
  }
};

export const asyncloadmysavedblogs = () => async (dispatch) => {
  try {
    const data = await axios.get("/show-lists");
    console.log("loaduser action lists>>>>>", data.data.lists);
    // console.log(data);
    dispatch(loadblogs(data.data.lists));
  } catch (err) {
    dispatch(errors(err.response.data.message));
  }
};

export const asynccreateblog = (blog) => async (dispatch) => {
  try {
    await axios.post("/create-stories", blog);
  } catch (err) {
    dispatch(errors(err.response.data.message));
  }
};
