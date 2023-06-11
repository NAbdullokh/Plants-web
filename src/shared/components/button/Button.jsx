import React from "react";
import classNames from "classnames";

import classes from "./Button.module.css";

const Button = ({ title, className, onClick }) => {
  const buttonClasses = classNames({
    [`${classes["button"]}`]: true,
    [`${className}`]: className,
  });

  return (
    <div onClick={onClick} className={buttonClasses}>
      {title}
    </div>
  );
};

export default Button;
