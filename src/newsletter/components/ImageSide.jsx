import React from "react";

import classes from "./ImageSide.module.css";

import plantImage from "../assets/images/plantImage.png";

const ImageSide = () => {
  return (
    <div className={classes["box-wrapper"]}>
      <img className={classes["img"]} src={plantImage} alt="plantImage" />
    </div>
  );
};

export default ImageSide;
