import './App.css';
import Board from './components/Board/Board';
import ScoreBoard from './components/ScoreBoard';
import ResetButton from './components/ResetButton';
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
  const [ scores, setScores ] = useState({xScore: 0, oScore:0});
  const [ gameOver, setGameOver ] = useState(false);

  const handleBoxClick = (boxIndex)=>{
    const updatedBox = board.map((value, index)=>{
      if (index === boxIndex){
        return xPlaying === true ? "X" : "O"
      }else{
        return value
      }
    })

    const winner = checkWinner(updatedBox);
    if(winner){
      if(winner === 'X'){
        let { xScore } = scores;
        xScore += 1
        setScores({...scores, xScore})
      }else{
        let { oScore } = scores;
        oScore += 1
        setScores({...scores, oScore})
      }
    }
    /**display score after thenext player play the game!! in app so we don't use useEffect??*/
    // console.log(scores);
    setBoard(updatedBox)
    setXPlaying(!xPlaying)
  }
  const checkWinner = (board)=>{
    for(var i=0; i<WIN_CONDITIONS.length; i++){
      const [x, y, z] = WIN_CONDITIONS[i]
      
      if(board[x] && board[x] === board[y] && board[y] === board[z]){
        setGameOver(true);
        return board[x]
      }
    }
  }

  const resetBoard = ()=>{
    setGameOver(false);
    setBoard(Array(9).fill(null));
  }
  return (
    <>
      <ScoreBoard scores={scores} xPlaying={xPlaying} />
      <Board board={board} onClick={ gameOver ? resetBoard : handleBoxClick}/>
      <ResetButton resetBoard={resetBoard}/>
    </>
  );
}

export default App;
