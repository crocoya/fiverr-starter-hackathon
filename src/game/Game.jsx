import { useState } from 'react';
import Cardboard from './Cardboard';
import './Game.css';

function Game() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="Game">
      {!isPlaying ? (
        <div>
          <p>
            This is a short game to help you to find projects as a new freelance
            on Fiverr : The most points you got, the more likely you are to get
            a project of your choice !
          </p>
          <p>
            You can choose to stop playing as soon as you're happy with your
            score, or to continue drawing cards. But be careful, if you go over
            12, you loose.
          </p>
          <button onClick={() => setIsPlaying(true)}>Start the game !</button>
        </div>
      ) : (
        <Cardboard />
      )}
    </div>
  );
}

export default Game;
