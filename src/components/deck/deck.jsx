import React from 'react';
import Card from './card';

const cards = [
  'pawn',
  'bishop',
  'knight',
  'rook',
  'queen',
  'thinker',
];

function Deck() {
  return (
      <main className="deck">
        {cards.map((card, index) => (<Card key={index} card={card}/>))}
      </main>
  );
}

export default Deck;
