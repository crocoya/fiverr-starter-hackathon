import Card from './Card';

import Score from './Score';
import { useState, useEffect } from 'react';
import './Cardboard.css';

function Cardboard() {
  const [isBack, setIsBack] = useState(true);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [cardsNumbers, isCardsNumbers] = useState([
    1, 1, 2, 2, 3, 3, 4, 4, 5, 5,
  ]);

  const [cards, setCards] = useState([]);
  const max = 12;

  const getCard = () => {
    const index = Math.floor(Math.random() * (cardsNumbers.length + 1));
    const value = cardsNumbers[index];
    setScore(score + value);

    const tempCardsValue = [...cardsNumbers];
    tempCardsValue.splice(index, 1);

    const tempCardsArray = [...cards];
    tempCardsArray.push({ value });
    setCards(tempCardsArray);

    setTimeout(() => {
      console.log('zefe');
      if (score > max) {
        setFinished(true);
      }
    }, 2500);
  };

  useEffect(() => {
    // getCard(true);
  }, [cardsNumbers]);

  const board = cards.map((elm, index) => (
    <Card
      number={elm.value}
      toMove={index === cards.length - 1}
      key={Math.floor(Math.random() * 1000)}
    ></Card>
  ));

  return (
    <>
      <div className="cardboard">{!finished ? board : 'finished'}</div>
      {!finished ? (
        <div>
          <button onClick={getCard} disabled={score > max || finished}>
            Get a new card
          </button>
          <button onClick={() => setFinished(true)}>
            End game with this score !
          </button>

          <div>Your score : </div>
          <Score value={score} />
        </div>
      ) : null}
    </>
  );
}

export default Cardboard;
