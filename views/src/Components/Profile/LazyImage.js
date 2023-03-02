import React, { useEffect, useState } from "react";
import "../../Style/Imgloader.css";

const LazyImage = (props) => {
  const { src, alt } = props;
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
    };
  }, [src]);

  return (
    <>
      {imageSrc ? (
        <img id="profileimg" src={imageSrc} alt={alt} />
      ) : (
        <div id="profileimgloader">
          <div className="imgloadcontainer">
            <div className="box1"></div>
            <div className="box2"></div>
            <div className="box3"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default LazyImage;
