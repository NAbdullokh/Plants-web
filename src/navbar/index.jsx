import React from "react";

import HamburgerMenu from "./components/HamburgerMenu";
import LoginSignUpComponent from "../shared/components/LoginSignUpComponent";

import { navbartItems } from "./utils/navbarItems";

import classes from "./index.module.css";

const Navbar = () => {
  return (
    <div className={classes["navbar-wrapper"]}>
      <h2 className={classes["header"]}>Plant</h2>
      <div className={classes["navbar-items"]}>
        {navbartItems.map((item) => {
          return (
            <a className={classes["nav-text"]} key={item.id} href={item.path}>
              {item.title}
            </a>
          );
        })}
      </div>
      <LoginSignUpComponent className={classes["login-signup"]} />
      <HamburgerMenu />
    </div>
  );
};

export default Navbar;
