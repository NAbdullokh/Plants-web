import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Navbar from "./navbar";
import Main from "./main";
import Collections from "./collection";
import About from "./about";
import Newsletter from "./newsletter";
import Reviews from "./reviews";
import Footer from "./footer";
import FollowInstagram from "./instagram";
import Products from "./products";

import classes from "./App.module.css";
import "./shared/assets/global.css";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className={classes["container"]}>
      <Navbar />
      <Main />
      <Collections />
      <About />
      <Products />
      <Reviews />
      <Newsletter />
      <FollowInstagram />
      <Footer />
    </div>
  );
};

export default App;
