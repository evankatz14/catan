import React, { useState } from 'react';

export default function Node({index, resources, style, currentPlayer}) {
  const [color, setColor] = useState('white')
  const handleNodeClick = () =>{
    console.log('resources', resources)
    console.log('currentPlayer', currentPlayer)
    setColor(currentPlayer);
  }

  return (
    <div className="node" style={{...style, backgroundColor: `${color}`}} onClick={handleNodeClick}></div>
  )
}