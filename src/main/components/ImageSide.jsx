import React from "react";

import classes from "./ImageSide.module.css";

import bigPlantImage from "../assets/images/bigPlant.png";

const ImageSide = () => {
  return (
    <div className={classes["box-wrapper"]}>
      <img
        className={classes["image"]}
        src={bigPlantImage}
        alt="big plant Image"
      />
      <div data-aos="fade-up-left" className={classes["box-1"]}>
        <div className={classes["option"]}>
          <div className={classes["circle"]}>
            <div className={classes["small-circle"]}></div>
          </div>
          <div className={classes["stick"]}></div>
          <div className={classes["container"]}>Cactus Thorn</div>
        </div>
      </div>

      <div data-aos="fade-up-right" className={classes["box-2"]}>
        <div className={classes["option"]}>
          <div className={classes["container"]}>Cactus stem</div>
          <div className={classes["stick"]}></div>
          <div className={classes["circle"]}>
            <div className={classes["small-circle"]}></div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up-left" className={classes["box-3"]}>
        <div className={classes["option"]}>
          <div className={classes["circle"]}>
            <div className={classes["small-circle"]}></div>
          </div>
          <div className={classes["stick"]}></div>
          <div className={classes["container"]}>Plant Media</div>
        </div>
      </div>
    </div>
  );
};

export default ImageSide;
