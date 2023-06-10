import React from "react";

import { collectionsImages } from "../utils/collectionsImages";

import classes from "./ImageSide.module.css";

const ImageSide = () => {
  return (
    <div className={classes["box-wrapper"]}>
      {collectionsImages.map((image) => {
        return (
          <div
            style={{ backgroundColor: image.bgColor }}
            className={classes["img-box"]}
          >
            <img
              className={classes["img"]}
              src={image.image}
              alt="plant image"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageSide;
