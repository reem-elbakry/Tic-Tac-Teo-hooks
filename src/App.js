import './App.css';
import Board from './components/Board/Board';
import React, { useState } from 'react';

function App() {
  const [ board, setBoard] = useState(Array(9).fill(null));
  const [ xPlaying, setXPlaying ] = useState(true); //x will start the game always
  const handleBoxClick = (boxIndex)=>{
    const updatedBox = board.map((value, index)=>{
      if (index == boxIndex){
        return xPlaying === true ? "X" : "O"
      }else{
        return value
      }
    })
    setBoard(updatedBox)
    setXPlaying(!xPlaying)
  }
  return (
    <>
      <Board board={board} onClick={handleBoxClick}/>
    </>
  );
}

export default App;
