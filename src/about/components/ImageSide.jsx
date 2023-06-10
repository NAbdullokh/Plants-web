import React from "react";

import classes from "./ImageSide.module.css";

import treeImage from "../assets/images/tree.png";

const ImageSide = () => {
  return (
    <div className={classes["box-wrapper"]}>
      <div className={classes["box"]}>
        {" "}
        <img className={classes["image"]} src={treeImage} alt="tree image" />
      </div>
    </div>
  );
};

export default ImageSide;
