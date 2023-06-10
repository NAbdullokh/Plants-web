import React from "react";
import classNames from "classnames";

import classes from "./Button.module.css";

const Button = ({ title, className }) => {
  const buttonClasses = classNames({
    [`${classes["button"]}`]: true,
    [`${className}`]: className,
  });

  return <div className={buttonClasses}>{title}</div>;
};

export default Button;
