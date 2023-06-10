import React from "react";

import classes from "./ImageSide.module.css";

import womenImage from "../assets/images/womenImage.png";

const ImageSide = () => {
  return (
    <div className={classes["box-wrapper"]}>
      <img src={womenImage} alt="womenImage" />
    </div>
  );
};

export default ImageSide;
