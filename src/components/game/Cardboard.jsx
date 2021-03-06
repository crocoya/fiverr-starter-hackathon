/* eslint-disable no-unused-vars */
import Card from './Card';
import { useHistory } from 'react-router-dom';
import Score from './Score';
import { useState, useEffect } from 'react';
import './Cardboard.css';

function Cardboard() {
  const history = useHistory();
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [cardsNumbers, setCardsNumbers] = useState([
    1, 1, 2, 2, 3, 3, 4, 4, 5, 5,
  ]);

  const [cards, setCards] = useState([]);
  const max = 12;

  const getCard = () => {
    const index = Math.floor(Math.random() * cardsNumbers.length);
    const value = cardsNumbers[index];
    setScore(score + value);

    const tempCardsValue = [...cardsNumbers];
    tempCardsValue.splice(index, 1);
    setCardsNumbers(tempCardsValue);

    const tempCardsArray = [...cards];
    tempCardsArray.push({ value });
    setCards(tempCardsArray);
  };

  useEffect(() => {
    if (score >= max) {
      setTimeout(() => {
        setScore(0);
        finishGame();
      }, 3000);
    }
  });

  const finishGame = () => {
    history.push({ pathname: '/afterGame', state: { score: score } });
  };

  const board = cards.length ? (
    cards.map((elm, index) => (
      <Card
        number={elm.value}
        toMove={index === cards.length - 1}
        key={Math.floor(Math.random() * 1000)}
      ></Card>
    ))
  ) : (
    <p>Draw a card to start!</p>
  );

  return (
    <>
      <div className='cardboard'>
        {!finished ? (
          board
        ) : (
          <>
            <p className='text-end'>
              The game is finished ! You got {score} points
            </p>
          </>
        )}
      </div>
      {!finished ? (
        <div className='score-section'>
          <div className='btn-action'>
            <button onClick={getCard} disabled={score > max || finished}>
              Get a new card
            </button>
            <button disabled={score > max || finished} onClick={finishGame}>
              End game with this score !
            </button>
          </div>
          <div className='score-card'>
            <p>Your score : </p>
            <Score value={score} />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Cardboard;
