import React, { useState } from "react";
import CardItem from "./CardItem/CardItem";
import data from "../../data/data";
import { Link } from "react-router-dom";
import OverlyItem from "./OverlyItem/OverlyItem";
import classes from "./card.module.css";
const Card = (props) => {
  const [itemChecked, setItemChecked] = useState(null);

  return (
    <>
      <div className={classes["row"]}>
        {!itemChecked &&
          data.map((element) => {
            return (
              <div
                key={element.id}
                onClick={() => setItemChecked(element)}
                className={classes["card-item"]}
              >
                <CardItem id={element.id} {...props} image={element.image} />
              </div>
            );
          })}
      </div>
      {itemChecked && (
        <Link to={`/cardItem/${itemChecked.id}`} state={itemChecked}>
          <OverlyItem id={itemChecked.id} image={itemChecked.image} />
        </Link>
      )}
    </>
  );
};

export default Card;
