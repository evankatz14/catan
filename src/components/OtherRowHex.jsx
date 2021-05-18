import React, { useState } from 'react';
import Node from './Node.jsx';

const style1 = {left: '100px', top: '-35px'}
const style2 = {left: '35px', top: '-30px'}
const style3 = {left: '-30px', top: '-95px'}

export default function OtherRowHex({type, adjacent, position, last}) {
  const nodes = [];
  for (let i = 0; i < 3; i++) {
    let currentNode = [type]
    let first = adjacent[Object.keys(adjacent)[i]];
    let second = adjacent[Object.keys(adjacent)[(i + 1) % 3]];
    if (first) {
      currentNode.push(first)
    }
    if (second) {
      currentNode.push(second)
    }
    nodes.push(currentNode);
  }

  return (
    <div >
      <button className="hex" style={{border: 'solid', borderRadius: '50%', width: '100px', height: '100px'}}>
        {type}
      </button>
      <Node resources={nodes[0]} style={style1}/>
      <Node resources={nodes[1]} style={style2}/>
      <Node resources={nodes[2]} style={style3}/>
    </div>
  )
}