import React, { useState } from 'react';

export default function Road({style, currentPlayer}) {
  const [color, setColor] = useState('white')
  const handleRoadClick = () => {
    setColor(currentPlayer)
  }
  return (
    <div className="road" style={{...style, backgroundColor: `${color}`}} onClick={handleRoadClick}></div>
  )
}