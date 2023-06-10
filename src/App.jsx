import React from "react";

import Navbar from "./navbar";
import Main from "./main";
import Collections from "./collection";
import About from "./about";
import Newsletter from "./newsletter";
import Reviews from "./reviews";
import Footer from "./footer";

import classes from "./App.module.css";
import "./shared/assets/global.css";

const App = () => {
  return (
    <div className={classes["container"]}>
      <Navbar />
      <Main />
      <Collections />
      <About />
      <Reviews />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
