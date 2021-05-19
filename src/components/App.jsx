import React, { useState } from 'react';
import Board from './Board.jsx';

export default function App() {
  const [currentPlayer, setCurrentPlayer] = useState('red');
  const [playerPool, setPlayerPool] = useState(['red', 'blue', 'green', 'brown'])
  const nextTurn = () => {
    const currentIndex = playerPool.indexOf(currentPlayer);
    console.log('currentIndex', currentIndex)
    setCurrentPlayer(playerPool[(currentIndex + 1) % playerPool.length])
  }
  return (
    <>
      <Board currentPlayer={currentPlayer} />
      <button onClick={nextTurn}>
        End Turn
      </button>
    </>
  )
}
