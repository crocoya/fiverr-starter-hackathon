import { useState, useEffect } from 'react';
import './Card.css';
import FiverrLogo from '../../assets/images/fiverrLogo.png';

function Card({ number, toMove }) {
  const [turnIt, setTurnIt] = useState(false);
  const [move, setMoved] = useState(toMove);
  console.log('movasse', toMove);

  useEffect(() => {
    if (move) {
      setTimeout(() => {
        setMoved(false);
        setTimeout(() => turnCard(), 1000);
      }, 100);
    }
  }, []);

  const turnCard = () => {
    setTurnIt(true);
  };

  const basicCard = (
    <div className={`card ${move ? 'toMove' : 'moved'}`}>
      <div className={`front turnedFix`}>{number}</div>
    </div>
  );

  const cartToTurn = (
    <div className={`card ${move ? 'toMove' : 'moved'}`}>
      <div className={`face front ${turnIt ? 'turned' : ''}`}>{number}</div>
      <div className={`face back ${turnIt ? 'turned' : ''}`} onClick={turnCard}>
        <img className='cardBackLogo' src={FiverrLogo} alt='fiverrLogo' />
      </div>
    </div>
  );

  return <>{toMove ? cartToTurn : basicCard}</>;
}

export default Card;
