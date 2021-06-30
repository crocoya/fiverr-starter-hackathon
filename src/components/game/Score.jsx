import { useEffect, useState } from 'react';
import './Game.css';

function Score({ value }) {
  const [score, setScore] = useState(0);

  useEffect(() => {
    let timer1 = setTimeout(() => setScore(value), 1800);

    return () => {
      clearTimeout(timer1);
    };
  });
  return <p className="Score">{score}</p>;
}

export default Score;
