import React, { useState } from 'react';
import Node from './Node.jsx';
import Road from './Road.jsx';

const style1 = {left: '-22px', top: '-34px'}
const style2 = {left: '35px', top: '-30px'}
const style3 = {left: '92px', top: '-124px'}
const style4 = {left: '92px', top: '-215px'}
const style5 = {left: '-22px', top: '-186px'}

export default function OtherRowHex({resource, adjacent, position, first, last}) {
  const nodes = [];
  for (let i = 1; i < 6; i++) {
    let currentNode = [resource]
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
  return (
    <div className="full-hex">
      <button className="hex" >
        {resource}
      </button>
      <Node index={3} resources={nodes[1]} style={style1}/>
      <Node index={4} resources={nodes[2]} style={style2}/>
      <Road style={{top: '-115px', left: '-25px', transform: 'rotate(90deg)'}}/>
      <Road style={{top: '-76px', left: '3px', transform: 'rotate(32deg)'}}/>
      <Road style={{top: '-86px', left: '61px', transform: 'rotate(-32deg)'}}/>
      {first &&(
        <>
          <Node index={2} resources={nodes[0]} style={style5}/>
          <Road style={{top: '-224px', left: '3px', transform: 'rotate(-32deg)'}}/>
        </>
      )}
      {last && (
        <>
          <Node index={5} resources={nodes[3]} style={style3}/>
          <Node index={6} resources={nodes[4]} style={style4}/>
          <Road style={{top: '-204px', left: '89px', transform: 'rotate(90deg)'}}/>
          <Road style={{top: '-263px', left: '61px', transform: 'rotate(32deg)'}}/>
        </>
      )}
    </div>
  )
}