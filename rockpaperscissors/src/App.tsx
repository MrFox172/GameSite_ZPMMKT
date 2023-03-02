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
  const [playerChoiceMessage, setPlayerChoiceMessage] = useState("Select an option above!");
  const [computerChoiceMessage, setComputerChoiceMessage] = useState("The computer awaits your decision.");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  function reset(){
    setRoundCounter(1);
    setChoice(0);
    setComputerChoice(0);
    setMessage("Game Reset!");
    setPlayerChoiceMessage("Select an option above!");
    setComputerChoiceMessage("The computer awaits your decision.");
    setPlayerScore(0);
    setComputerScore(0);
  }

  function play(selected:number)
  {
    setRoundCounter(roundCounter+1);
    setChoice(selected);
    switch(selected)
    {
      case 1: setPlayerChoiceMessage("You selected Rock.");
              break;
      case 2: setPlayerChoiceMessage("You selected Paper.");
              break;
      default: setPlayerChoiceMessage("You selected Scissors");
    }
    
    setComputerChoice(Math.floor(Math.random()*3)+1);
    switch(computerChoice)
    {
      case 1: setComputerChoiceMessage("Computer selected Rock.");
              break;
      case 2: setComputerChoiceMessage("Computer selected Paper.");
              break;
      default: setComputerChoiceMessage("Computer selected Scissors");
    }
    
    if(choice==computerChoice)
    {
      setMessage("The round has ended in a draw!");
    }
    else if(choice==1)
    {
      if(computerChoice==2)
      {
          setMessage("The round has ended, you've lost!");
          setComputerScore(computerScore+1);
      }
      else//oops!
      {
         setMessage("The round has ended, you've won!");
         setPlayerScore(playerScore+1);
      }
    }
    else if(choice==2)
    {
      if(computerChoice==3)
      {
          setMessage("The round has ended, you've lost!");
          setComputerScore(computerScore+1);
      }
      else
      {
         setMessage("The round has ended, you've won!");
         setPlayerScore(playerScore+1);
      }
    }
    else if (choice == 3)
    {
      if(computerChoice==1)
      {
          setMessage("The round has ended, you've lost!");
          setComputerScore(computerScore+1);
      }
      else
      {
         setMessage("The round has ended, you've won!");
         setPlayerScore(playerScore+1);
      }
    }

  }


  return (
    <div className="App">
      <div className="header">
        <h3>Welcome to Rock Paper Scissors!</h3>
        <p>To start, choose either rock paper or scissors.</p>
        <h5>Round: {roundCounter}</h5>
      </div>

      <h2 className="text-center">Are you really gonna lose to a computer?</h2>


      <div className="flex-row">
        <div className="player-choice internal-div">
          <h4 className="choice text-center">Make your Choice!</h4>
          <div className="options">
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
          <h3 className="font text-center">{playerChoiceMessage}</h3>
          <h3 className="font text-center">Player Score: {playerScore}</h3>
        </div>

        <div className="computer-choice internal-div">
          <h4 className="choice text-center">Computer's Choice</h4>
          {/* <img src={Computer} className="computer-output"></img> */}
          <div className="options">
          <button className="button">
            <img src={Rock} className="player-output" alt="rock" />
          </button>
          <button className="button">
            <img src={Paper} className="player-output" alt="paper" />
          </button>
          <button className="button">
            <img src={Scissors} className="player-output" alt="scissors" />
          </button>
          </div>
          <h3 className="font text-center">{computerChoiceMessage}</h3>
          <h3 className="font text-center">Computer Score: {computerScore}</h3>
        </div>
      </div>
      <h3 className="result text-center">{message}</h3>

      <div className="resetContainer">
        <button className="reset" onClick={reset}>Reset Game</button>
      </div>
  
    </div>
  );
}

export default App;
