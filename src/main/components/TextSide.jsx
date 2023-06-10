import React from "react";
import CountUp from "react-countup";

import Button from "../../shared/components/button/Button";

import { countUpNumbers } from "../utils/countUpNumbers";

import classes from "./TextSide.module.css";

import leafImage from "../assets/images/leaf.png";

const TextSide = () => {
  return (
    <div className={classes["box-wrapper"]}>
      <h3 className={classes["title"]}>Growing Beautiful Plants at Home</h3>
      <p className={classes["description"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
        accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa
        diam. Lectus elit, nulla elementum fringilla at.
      </p>
      <Button className={classes["button"]} title="Learn More" />
      <div className={classes["countUp-wrapper"]}>
        {countUpNumbers.map((value) => {
          return (
            <div key={value.id} className={classes["countUp"]}>
              <p className={classes["number"]}>
                <CountUp end={value.number} duration={7} />+
              </p>
              <p className={classes["text"]}>{value.title}</p>
            </div>
          );
        })}
      </div>
      <img className={classes['leaf-image']} src={leafImage} alt="leaf image" />
    </div>
  );
};

export default TextSide;
