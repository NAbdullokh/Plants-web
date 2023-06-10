import React from "react";

import classes from "./LoginSignUpComponent.module.css";
import Button from "./button/Button";
import classNames from "classnames";

const LoginSignUpComponent = ({ className }) => {
  const loginSignupClasses = classNames({
    [`${classes["login-signup"]}`]: true,
    [`${className}`]: className,
  });

  return (
    <div className={loginSignupClasses}>
      <p className={classes["login"]}>Login</p>
      <Button className={classes["button"]} title="Sign Up" />
    </div>
  );
};

export default LoginSignUpComponent;
