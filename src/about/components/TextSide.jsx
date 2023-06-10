import React from "react";

import classes from "./TextSide.module.css";
import Button from "../../shared/components/button/Button";

const TextSide = () => {
  return (
    <div className={classes["box-wrapper"]}>
      <h5 className={classes["header"]}>About Us</h5>
      <p className={classes["title"]}>
        Continue to Develop to Became Global Company
      </p>
      <p className={classes["description"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
        accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa
        diam. Lectus elit, nulla elementum fringilla at. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc
        cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla
        elementum fringilla at.
        <br />
        <br />
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
          accumsan sit amet nunc cursus.
        </span>
      </p>
      <Button className={classes["button"]} title="Read More" />
    </div>
  );
};

export default TextSide;
