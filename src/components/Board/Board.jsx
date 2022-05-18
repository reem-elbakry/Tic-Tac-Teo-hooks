import React from 'react';
import Box from './Box/Box';
import './Board.css'


const Board = ({board, onClick}) => {
    return(
        <div className='board'>
        {board.map((value, index)=>{
            return(
                <Box key={index} value={value} onClick={() => onClick(index) }/>
            )
        })}
        </div>
    );
}

export default Board;