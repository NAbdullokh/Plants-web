import React from "react";

import classes from "./TextSide.module.css";

import EastIcon from "@mui/icons-material/East";

const TextSide = () => {
  return (
    <div className={classes["box-wrapper"]}>
      <div className={classes["title"]}>
        We have lots of plants collection for you and your family
      </div>
      <span className={classes["text"]}>
        See all collection
        <EastIcon className={classes["icon"]} />
      </span>
    </div>
  );
};

export default TextSide;
