import { useState } from "react";
import Square from "./Square";
import "./game.css";

const Game = () => {
  const [state, setState] = useState(Array(16).fill(null));
  const [isX, setIsX] = useState(true);

  const clickHandler = (index) => {
    // this if condition will prevent the board to replace the value
    if (state[index] !== null){
      return;
    }
    // creating a copy of the state 
    const copyState = [...state];
    copyState[index] = isX ? "X" : "O";
    setState(copyState);
    setIsX(!isX);
  };

  const checkWinner = () => {
    const winningConditions = [
      [0, 1, 2, 3],
      [4, 5, 6, 7],
      [8, 9, 10, 11],
      [12, 13, 14, 15],
      [0, 4, 8, 12],
      [1, 5, 9, 13],
      [2, 6, 10, 14],
      [3, 7, 11, 15],
      [0, 5, 10, 15],
      [3, 6, 9, 12],
    ];

    for (let logic of winningConditions) {
      const [a, b, c, d] = logic;
      if (
        state[a] !== null &&
        state[a] === state[b] &&
        state[b] === state[c] &&
        state[c] === state[d]
      ) {
        return state[a];
      }
    }
    return false;
  };

  const resetHandler = () => {
    setState(Array(16).fill(null));
  };


  const isWinner = checkWinner();

  return (
    <div className="board-container">
      {isWinner ? (
        <div className="message">
          Player <span>{isWinner}</span> won the game{" "}<br></br>
          <button onClick={resetHandler}>Play Again</button>
        </div>
      ) : (
        <div className="main-board">
          <h4>Player <span>{ isX ? "X" : "O" }</span> please move</h4>
          <div className="board-row">
            <Square onClick={() => clickHandler(0)} value={state[0]} />
            <Square onClick={() => clickHandler(1)} value={state[1]} />
            <Square onClick={() => clickHandler(2)} value={state[2]} />
            <Square onClick={() => clickHandler(3)} value={state[3]} />
          </div>
          <div className="board-row">
            <Square onClick={() => clickHandler(4)} value={state[4]} />
            <Square onClick={() => clickHandler(5)} value={state[5]} />
            <Square onClick={() => clickHandler(6)} value={state[6]} />
            <Square onClick={() => clickHandler(7)} value={state[7]} />
          </div>
          <div className="board-row">
            <Square onClick={() => clickHandler(8)} value={state[8]} />
            <Square onClick={() => clickHandler(9)} value={state[9]} />
            <Square onClick={() => clickHandler(10)} value={state[10]} />
            <Square onClick={() => clickHandler(11)} value={state[11]} />
          </div>
          <div className="board-row">
            <Square onClick={() => clickHandler(12)} value={state[12]} />
            <Square onClick={() => clickHandler(13)} value={state[13]} />
            <Square onClick={() => clickHandler(14)} value={state[14]} />
            <Square onClick={() => clickHandler(15)} value={state[15]} />
          </div>
          <button onClick={resetHandler} >Reset</button>
        </div>
      )}
    </div>
  );
};

export default Game;