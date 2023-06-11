import React from "react";

import { flowersGallery } from "../utils/flowersGallery";

import classes from "./ImageSide.module.css";

const ImageSide = () => {
  return (
    <div className={classes["box-wrapper"]}>
      {flowersGallery.map((image) => {
        return (
          <div
            key={image.id}
            className={`${classes["image-box"]} ${
              image.icon ? classes["image-icon"] : null
            }`}
          >
            <img
              className={classes["image"]}
              src={image.image}
              alt="flower image"
            />
            <div className={classes["icon"]}>{image?.icon}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageSide;
