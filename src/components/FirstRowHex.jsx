import React, { useState } from 'react';
import Node from './Node.jsx';

const style1 = {left: '35px'}
const style2 = {left: '100px', top: '2px'}
const style3 = {left: '100px', top: '35px'}
const style4 = {left: '35px', top: '-60px'}
const style5 = {left: '-30px', top: '-120px'}
const style6 = {left: '-30px', top: '-215px'}

export default function FirstRowHex({type, adjacent, position, last}) {
  const nodes = [];
  if (!last) {
    for (let i = 0; i < 6; i++) {
      let currentNode = [type]
      let first = adjacent[Object.keys(adjacent)[i]];
      let second = adjacent[Object.keys(adjacent)[(i + 1) % 6]];
      if (first) {
        currentNode.push(first)
      }
      if (second) {
        currentNode.push(second)
      }
      nodes.push(currentNode);
    }
  } else {
    for (let i = 0; i < 4; i++) {
      let currentNode = [type]
      let first = adjacent[Object.keys(adjacent)[i]];
      let second = adjacent[Object.keys(adjacent)[i + 1]];
      if (first) {
        currentNode.push(first)
      }
      if (second) {
        currentNode.push(second)
      }
      nodes.push(currentNode);
    }
  }
  return (
    <div >
      <Node resources={nodes[0]} style={style1}/>
      <Node resources={nodes[1]} style={style2}/>
      <Node resources={nodes[2]} style={style3}/>
      <button className="hex" style={{top: '-60px'}}>
        {type}
      </button>
      <Node resources={nodes[3]} style={style4}/>
      {!last && (
        <>
          <Node resources={nodes[4]} style={style5}/>
          <Node resources={nodes[5]} style={style6}/>
        </>
      )}
    </div>
  )
}