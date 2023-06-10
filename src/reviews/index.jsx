import React from "react";

import TextSide from "./components/TextSide";
import ImageSide from "./components/ImageSide";

import classes from "./index.module.css";

const Reviews = () => {
  return (
    <div className={classes["reviews-wrapper"]}>
      <TextSide />
      <ImageSide />
    </div>
  );
};

export default Reviews;
