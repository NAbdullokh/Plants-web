import React from "react";

import ImageSide from "./components/ImageSide";
import TextSide from "./components/TextSide";

import classes from "./index.module.css";

const About = () => {
  return (
    <div className={classes["aboutUs-wrapper"]}>
      <ImageSide />
      <TextSide />
    </div>
  );
};

export default About;
