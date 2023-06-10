import React, { useState } from "react";
import { Turn } from "hamburger-react";

import LoginSignUpComponent from "../../shared/components/LoginSignUpComponent";

import { navbartItems } from "../utils/navbarItems";

import classes from "./HamburgerMenu.module.css";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <div className={classes["wrapper"]}>
      <Turn toggled={open} toggle={setOpen} />
      <div
        style={open ? { transform: "translateX(0)" } : null}
        className={classes["hamburger"]}
      >
        <div className={classes["nav-items"]}>
          {navbartItems.map((value) => {
            return (
              <a
                key={value.id}
                onClick={() => setOpen(() => false)}
                href={value.path}
                className={classes["item"]}
              >
                {value.title}
              </a>
            );
          })}
        </div>
        <LoginSignUpComponent className={classes["login-signup"]} />
      </div>
    </div>
  );
};

export default HamburgerMenu;
