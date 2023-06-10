import React from "react";

import classes from "./TextSide.module.css";

const TextSide = () => {
  return (
    <div className={classes["box-wrapper"]}>
      <h3 className={classes["header"]}>What Our Customers Says</h3>
      <p className={classes["description"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
        accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa
        diam. Lectus elit, nulla elementum fringilla at.
      </p>
      <div className={classes["customer-review"]}></div>
    </div>
  );
};

export default TextSide;
