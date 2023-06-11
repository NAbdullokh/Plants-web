import React from "react";

import TopSide from "./components/TopSide";
import ImageSide from "./components/ImageSide";

import classes from "./index.module.css";

const FollowInstagram = () => {
  return (
    <div className={classes["container-wrapper"]}>
      <TopSide />
      <ImageSide />
    </div>
  );
};

export default FollowInstagram;
