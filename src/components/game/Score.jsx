import { useEffect, useState } from 'react';
import './Game.css';

function Score({ value }) {
  const [score, setScore] = useState(0);

  useEffect(() => {
    console.log('value', score, value);
    let timer1 = setTimeout(() => setScore(value), 1800);

    return () => {
      clearTimeout(timer1);
    };
  });
  return <div className="Score">{score}</div>;
}

export default Score;
