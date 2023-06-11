import React from "react";

import { footerData } from "./utils/footerData";
import { socialMediasData } from "./utils/socialMediasData";

import classes from "./index.module.css";

const Footer = () => {
  return (
    <div className={classes["footer-wrapper"]}>
      <div className={classes["single-column"]}>
        <h3 className={classes["header"]}>Plant</h3>
        <div style={{ width: "80%" }} className={classes["text"]}>
          Lorem ipsum dolor sit amet, consectetur adi piscing elit. Diam nibh
          posuere duis eu non sit integer at placerat amet.
        </div>
        <div className={classes["social-medias"]}>
          {socialMediasData.map((socialMedia) => {
            return (
              <div key={socialMedia.id} className={classes["social-media"]}>
                {socialMedia.icon}
              </div>
            );
          })}
        </div>
      </div>
      {footerData.map((item, index) => (
        <div className={classes["column"]} key={index}>
          <h3 className={classes["header"]}>{item.title}</h3>
          {item.links.map((link, linkIndex) => (
            <p className={classes["text"]} key={linkIndex}>
              {link}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Footer;
