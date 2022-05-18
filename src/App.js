import './App.css';
import Board from './components/Board/Board';
import React, { useState } from 'react';

function App() {
  const WIN_CONDITIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6], 
];
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
    console.log(checkWinner(updatedBox));
    setBoard(updatedBox)
    setXPlaying(!xPlaying)
  }
  const checkWinner = (board)=>{
    for(var i=0; i<WIN_CONDITIONS.length; i++){
      const [x, y, z] = WIN_CONDITIONS[i]
      
      if(board[x] && board[x] === board[y] && board[y] === board[z]){
        return board[x]
      }
    }
  }
  return (
    <>
      <Board board={board} onClick={handleBoxClick}/>
    </>
  );
}

export default App;
