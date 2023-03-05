import React, { useEffect, useState } from "react";

const Getquotes = () => {
  const [data, setdata] = useState({
    anime: "Avatar: The Last Airbender",
    character: "Tamaki Suou",
    quote:
      "What good are dreams, if all you do is work? There’s more to life than hitting the books, I hope you know.",
  });

  const apidata = async () => {
    fetch("https://animechan.vercel.app/api/random")
      .then((res) => res.json())
      .then((data) => setdata(data));
  };
  useEffect(() => {
    apidata();
  }, []);

  return (
    <div id="getquoteparent">
      <div id="getquote">
        <i class="ri-restart-fill quote-refresh" onClick={apidata}></i>
        <h1>
          <span className="highlightcolor">T</span>o
          <span className="highlightcolor">da</span>ys{" "}
          <span className="highlightcolor">Q</span>u
          <span className="highlightcolor">ot</span>e:
        </h1>
        <h2>“{data.quote}”</h2>
        <h3 className="highlightcolor"> — {data.character}</h3>
      </div>
    </div>
  );
};

export default Getquotes;
