import React from "react";
import Card from "../Cards/Card";
import classes from "./Home.module.css";
const Home = () => {
  return (
    <div>
      <h2 className={classes["title-primary"]}>Choose a Card</h2>
      <div className={classes["container"]}>
        <Card />
      </div>
    </div>
  );
};

export default Home;
