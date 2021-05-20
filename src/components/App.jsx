import React, { useState } from 'react';
import Board from './Board.jsx';

export default function App() {
  const [currentPlayer, setCurrentPlayer] = useState('red');
  const [playerPool, setPlayerPool] = useState(['red', 'blue', 'green', 'brown'])
  const nextTurn = () => {
    const currentIndex = playerPool.indexOf(currentPlayer);
    setCurrentPlayer(playerPool[(currentIndex + 1) % playerPool.length])
  }
  return (
    <>
      <Board currentPlayer={currentPlayer} />
      <div style={{width: '130px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        current player:
        <div style={{height: '20px', width: '20px', backgroundColor: `${currentPlayer}`}}></div>
      </div>
      <button onClick={nextTurn}>
        End Turn
      </button>
    </>
  )
}
