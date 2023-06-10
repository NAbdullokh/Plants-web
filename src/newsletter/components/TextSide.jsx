import React from "react";

import Button from "../../shared/components/button/Button";

import classes from "./TextSide.module.css";

const TextSide = () => {
  return (
    <div className={classes["box-wrapper"]}>
      <h3 className={classes["header"]}>Subscribe Our Newsletter </h3>
      <p className={classes["description"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, at tempor,
        accumsan sit amet nunc cursus.{" "}
      </p>
      <div className={classes["input-wrapper"]}>
        <input
          type="text"
          className={classes["input"]}
          placeholder="Enter mail..."
        />
        <Button className={classes["button"]} title="Subscribe" />
      </div>
    </div>
  );
};

export default TextSide;
