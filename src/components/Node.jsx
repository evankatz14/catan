import React, { useState } from 'react';

export default function Node({resources, style}) {
  const handleNodeClick = () =>{
    console.log('resources', resources)
  }

  return (
    <div className="node" style={style} onClick={handleNodeClick}>C</div>
  )
}