import React from "react";
import classes from "./CardItem.module.css";

const CardItem = (props) => {
  return (
    <>
      <div className={classes["card-item"]}>
        <span className={classes["item-id-top"]}>{props.id}</span>
        <img src={props.image} alt={props.id} />
      </div>
    </>
  );
};

export default CardItem;
