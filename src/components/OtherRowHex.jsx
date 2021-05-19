import React, { useState } from 'react';
import Node from './Node.jsx';
import Road from './Road.jsx';

const style1 = {left: '92px', top: '-34px'}
const style2 = {left: '35px', top: '-30px'}
const style3 = {left: '-22px', top: '-94px'}

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
      <button className="hex" >
        {type}
      </button>
      <Node resources={nodes[0]} style={style1}/>
      <Node resources={nodes[1]} style={style2}/>
      <Node resources={nodes[2]} style={style3}/>
      <Road style={{top: '-145px', left: '-25px', transform: 'rotate(90deg)'}}/>
      <Road style={{top: '-106px', left: '3px', transform: 'rotate(32deg)'}}/>
      <Road style={{top: '-116px', left: '61px', transform: 'rotate(-32deg)'}}/>
      <Road style={{top: '-175px', left: '89px', transform: 'rotate(90deg)'}}/>
    </div>
  )
}