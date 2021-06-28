import Card from './Card';
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

  const getCard = (isNew) => {
    const index = Math.floor(Math.random() * (cardsNumbers.length + 1));
    const value = cardsNumbers[index];

    const tempCardsValue = [...cardsNumbers];
    tempCardsValue.splice(index, 1);
    setScore(score + value);

    const tempCardsArray = [...cards];
    tempCardsArray.push({ value });
    setCards(tempCardsArray);
  };

  useEffect(() => {
    getCard(true);
    if (score > max) {
      setFinished(true);
    }
  }, []);

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
          <div>Your score : {score}</div>
        </div>
      ) : null}
    </>
  );
}

export default Cardboard;