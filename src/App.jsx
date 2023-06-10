import React from "react";

import Navbar from "./navbar";
import Main from "./main";

import classes from "./App.module.css";
import "./shared/assets/global.css";

const App = () => {
  return (
    <div className={classes["container"]}>
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
