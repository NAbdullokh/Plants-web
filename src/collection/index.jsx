import React from "react";

import TextSide from "./components/TextSide";
import ImageSide from "./components/ImageSide";

import classes from "./index.module.css";

const Collections = () => {
  return (
    <div className={classes["collections-wrapper"]}>
      <TextSide />
      <ImageSide />
    </div>
  );
};

export default Collections;
