import React, { useState } from 'react';
import Computer from './Computer.png';
import Rock from './Rock.png';
import Paper from './Paper.png';
import Scissors from './Scissors.png';

import './App.css';

function App() {
  const [roundCounter, setRoundCounter] = useState(1);
  const [choice, setChoice] = useState(0); //1 is rock, 2 is paper, 3 is scissors. 0 is nothing.
  const [computerChoice, setComputerChoice] = useState(0);
  const [message, setMessage] = useState("To play, make your choice!");


  function play(selected:number)
  {
    setChoice(selected);
    setComputerChoice(Math.floor(Math.random()*3)+1);
    if(choice==computerChoice)
    {
      setMessage("The round has ended in a draw!");
    }
    else if(choice==1)
    {
      if(computerChoice==2)
      {
          setMessage("The round has ended, you've lost!");
      }
      else
      {
         setMessage("The round has ended, you've won!");
      }
    }
    else if(choice==2)
    {
      if(computerChoice==3)
      {
          setMessage("The round has ended, you've lost!");
      }
      else
      {
         setMessage("The round has ended, you've won!");
      }
    }
    else if (choice == 3)
    {
      if(computerChoice==1)
      {
          setMessage("The round has ended, you've lost!");
      }
      else
      {
         setMessage("The round has ended, you've won!");
      }
    }

  }


  return (
    <div className="App">
      <div className="header">
        <h3>Welcome to Rock Paper Scissors!</h3>
        <p>To start, choose either rock paper or scissors.</p>
      </div>

      <div className="round-counter">
        <h3>Round: {roundCounter}</h3>
      </div>

      <div className="main">
        <div className="player-choice internal-div">
          <h4>Make your Choice!</h4>
          <button className="button" onClick={()=>play(1)}>
            <img src={Rock} className="player-output" alt="rock" />
          </button>
          <button className="button" onClick={()=>play(2)}>
            <img src={Paper} className="player-output" alt="paper" />
          </button>
          <button className="button" onClick={()=>play(3)}>
            <img src={Scissors} className="player-output" alt="scissors" />
          </button>
        </div>
        <div className="computer-choice internal-div">
          <h4>Computer's Choice</h4>
          <img src={Computer} className="computer-output"></img>
        </div>
        <div className="result">{message}</div>
      </div>
    </div>
  );
}

export default App;
