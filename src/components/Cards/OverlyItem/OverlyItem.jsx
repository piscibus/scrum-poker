import React from "react";
import classes from "./overly-item.module.css";
const OverlyItem = (props) => {
  console.log(props.image);
  return (
    <div className={classes.overly}>
      <div className={classes.cover}></div>
    </div>
  );
};
export default OverlyItem;
