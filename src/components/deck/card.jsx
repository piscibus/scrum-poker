import React from 'react';

function Card({card}) {
  const number = card.number === Infinity ? '∞' : card.number;
  const suitImg = require(`../../../assets/images/${card.suit}.svg`);
  return (
      <div className="grid-item play-card">
        <div className="play-card__body">
          <div className="play-card__number">
            <span>{number}</span>
          </div>
          <div className="play-card__suit">
            <img src={suitImg} alt={card.suit}/>
          </div>
        </div>
      </div>
  );
}

export default Card;
