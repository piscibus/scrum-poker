import React from 'react';
import Card from './card';

const cards = [
  {
    number: 1,
    suit: 'pawn',
  },
  {
    number: 2,
    suit: 'bishop',
  },
  {
    number: 3,
    suit: 'knight',
  },
  {
    number: 5,
    suit: 'rook',
  },
  {
    number: 8,
    suit: 'queen',
  },
  {
    number: Infinity,
    suit: 'thinker',
  },
];

function Deck() {
  return (
      <main className="deck">
        <div className="grid">
          {cards.map((card, index) => (<Card key={index} card={card}/>))}
        </div>
      </main>
  );
}

export default Deck;
