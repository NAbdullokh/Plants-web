import React from "react";

import TextSide from "./components/TextSide";
import ImageSide from "./components/ImageSide";

import classes from "./index.module.css";

const Newsletter = () => {
  return (
    <div className={classes["newsletter-wrapper"]}>
      <TextSide />
      <ImageSide />
    </div>
  );
};

export default Newsletter;
