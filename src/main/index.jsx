import React from "react";

import TextSide from "./components/TextSide";
import ImageSide from "./components/ImageSide";

import classes from "./index.module.css";

const Main = () => {
  return (
    <div id="home" className={classes["wrapper"]}>
      <TextSide />
      <ImageSide />
    </div>
  );
};

export default Main;
